import { Entity } from '@loopback/repository';
export declare class Company extends Entity {
    _id?: string;
    companyName: string;
    country: string;
    constructor(data?: Partial<Company>);
}
export interface CompanyRelations {
}
export declare type CompanyWithRelations = Company & CompanyRelations;
