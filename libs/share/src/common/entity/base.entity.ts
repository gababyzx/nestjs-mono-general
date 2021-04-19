import { Column, CreateDateColumn, Generated, PrimaryColumn, UpdateDateColumn } from "typeorm";

// eslint-disable-next-line @typescript-eslint/ban-types
export class BaseEntity<T = {}> {

    /**
     *
     */
    constructor(partial?: Partial<T>) {
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