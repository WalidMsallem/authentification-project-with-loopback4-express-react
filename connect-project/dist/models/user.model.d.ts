import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    _id?: string;
    username: string;
    email: string;
    password: string;
    constructor(data?: Partial<User>);
    generateAuthToken(): any;
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
