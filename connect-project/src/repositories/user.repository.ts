import {DefaultCrudRepository} from '@loopback/repository';
import {User, UserRelations} from '../models';
import {ConnectDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype._id,
  UserRelations
> {
  constructor(
    @inject('datasources.connectDB') dataSource: ConnectDbDataSource,
  ) {
    super(User, dataSource);
  }
}
