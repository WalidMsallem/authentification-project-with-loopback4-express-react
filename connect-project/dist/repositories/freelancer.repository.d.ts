import { DefaultCrudRepository } from '@loopback/repository';
import { Freelancer, FreelancerRelations } from '../models';
import { ConnectDbDataSource } from '../datasources';
export declare class FreelancerRepository extends DefaultCrudRepository<Freelancer, typeof Freelancer.prototype._id, FreelancerRelations> {
    constructor(dataSource: ConnectDbDataSource);
}
