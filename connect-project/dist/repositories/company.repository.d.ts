import { DefaultCrudRepository } from '@loopback/repository';
import { Company, CompanyRelations } from '../models';
import { ConnectDbDataSource } from '../datasources';
export declare class CompanyRepository extends DefaultCrudRepository<Company, typeof Company.prototype._id, CompanyRelations> {
    constructor(dataSource: ConnectDbDataSource);
}
