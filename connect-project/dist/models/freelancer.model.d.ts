import { Entity } from '@loopback/repository';
export declare class Freelancer extends Entity {
    _id?: string;
    firstName: string;
    lastName: string;
    occupation: string;
    constructor(data?: Partial<Freelancer>);
}
export interface FreelancerRelations {
}
export declare type FreelancerWithRelations = Freelancer & FreelancerRelations;
