import {DefaultCrudRepository} from '@loopback/repository';
import {Company, CompanyRelations} from '../models';
import {ConnectDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompanyRepository extends DefaultCrudRepository<
  Company,
  typeof Company.prototype._id,
  CompanyRelations
> {
  constructor(
    @inject('datasources.connectDB') dataSource: ConnectDbDataSource,
  ) {
    super(Company, dataSource);
  }
}
