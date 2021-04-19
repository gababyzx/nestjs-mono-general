import { BaseEntity } from '@lib/share/common/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class CustomerEntity extends BaseEntity {

    constructor(partial: Partial<CustomerEntity>) {
        super(partial);
    }

    @Column()
    public name: string;

    @Column()
    public description: string;

    @Column()
    public domain: string[];

    @Column()
    public active: boolean;

    @Column()
    public key: string;

    @Column()
    public mailing_host: string;

    @Column()
    public mailing_secure: boolean;

    @Column()
    public mailing_port: number;

    @Column()
    public mailing_user: string;

    @Column()
    public mailing_password: string;

    @Column()
    public airtable_key: string;

    @Column()
    public airtable_base: string;
}
