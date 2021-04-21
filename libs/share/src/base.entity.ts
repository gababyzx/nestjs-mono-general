import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

export class ShareEntity<T = {}> extends BaseEntity {
  /**
   *
   */
  constructor(partial?: Partial<T>) {
    super();
    Object.assign(this, partial);
  }

  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: string;

  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;

  @Column({ nullable: true }) createdBy: string;
  @Column({ nullable: true }) updatedBy: string;
}
