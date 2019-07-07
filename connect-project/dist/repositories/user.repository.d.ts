import { DefaultCrudRepository } from '@loopback/repository';
import { User, UserRelations } from '../models';
import { ConnectDbDataSource } from '../datasources';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype._id, UserRelations> {
    constructor(dataSource: ConnectDbDataSource);
}
