import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
    @ApiProperty({ type: String })
    name: string;

    @ApiProperty({ type: String })
    description: string;

    @ApiProperty({ type: [String] })
    domain: string[];

    @ApiProperty({ type: Boolean })
    active: boolean;

    @ApiProperty({ type: String })
    key: string;

    @ApiProperty({ type: String })
    mailing_host: string;

    @ApiProperty({ type: Boolean })
    mailing_secure: boolean;

    @ApiProperty({ type: Number })
    mailing_port: number;

    @ApiProperty({ type: String })
    mailing_user: string;

    @ApiProperty({ type: String })
    mailing_password: string;

    @ApiProperty({ type: String })
    airtable_key: string;

    @ApiProperty({ type: String })
    airtable_base: string;
}