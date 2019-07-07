import {DefaultCrudRepository} from '@loopback/repository';
import {Freelancer, FreelancerRelations} from '../models';
import {ConnectDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FreelancerRepository extends DefaultCrudRepository<
  Freelancer,
  typeof Freelancer.prototype._id,
  FreelancerRelations
> {
  constructor(
    @inject('datasources.connectDB') dataSource: ConnectDbDataSource,
  ) {
    super(Freelancer, dataSource);
  }
}
