import { BaseEntity, DeleteResult, Repository } from 'typeorm';
import { EntityId } from 'typeorm/repository/EntityId';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { HttpStatus, HttpException, LoggerService } from '@nestjs/common';

export interface IBaseService<T> {
  findAll: (options?: IPaginationOptions) => Promise<Pagination<T>>;
  findById: (id: EntityId) => Promise<T>;
  findByIds: (
    ids: [EntityId],
    options?: IPaginationOptions,
  ) => Promise<Pagination<T>>;
  store: (dto: any) => Promise<T>;
  update: (id: EntityId, dto: any) => Promise<T>;
  delete: (id: EntityId) => Promise<DeleteResult>;
}

export class BaseService<T extends BaseEntity, R extends Repository<T>>
  implements IBaseService<T> {
  protected readonly repository: R;
  protected readonly logger: LoggerService;

  constructor(repository: R, logger: LoggerService) {
    this.repository = repository;
    this.logger = logger;
  }

  findAll(options?: IPaginationOptions): Promise<Pagination<T>> {
    return paginate<T>(this.repository, options);
  }

  async findById(id: EntityId): Promise<T> {
    const record = await this.repository.findOne(id);
    if (!record) {
      throw new HttpException(
        `${this.repository.metadata.name} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return this.repository.findOne(id);
  }

  findByIds(
    ids: [EntityId],
    options?: IPaginationOptions,
  ): Promise<Pagination<T>> {
    const queryBuilder = this.repository.createQueryBuilder('c');
    queryBuilder.whereInIds(ids); // Or whatever you need to do
    return paginate<T>(queryBuilder, options);
  }

  store(data: any): Promise<T> {
    return this.repository.save(data);
  }

  async update(id: EntityId, data: any): Promise<T> {
    const record = await this.repository.update(id, data);
    if (!record) {
      throw new HttpException(
        `${this.repository.metadata.name} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return this.findById(id);
  }

  async delete(id: EntityId): Promise<DeleteResult> {
    const record = await this.repository.delete(id);
    if (!record.affected) {
      throw new HttpException(
        `${this.repository.metadata.name} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return record;
  }
}
