import { Count, Filter, Where } from '@loopback/repository';
import { Freelancer } from '../models';
import { FreelancerRepository } from '../repositories';
export declare class FreelancerController {
    freelancerRepository: FreelancerRepository;
    constructor(freelancerRepository: FreelancerRepository);
    create(freelancer: Freelancer): Promise<Freelancer>;
    count(where?: Where<Freelancer>): Promise<Count>;
    find(filter?: Filter<Freelancer>): Promise<Freelancer[]>;
    updateAll(freelancer: Freelancer, where?: Where<Freelancer>): Promise<Count>;
    findById(id: string): Promise<Freelancer>;
    updateById(id: string, freelancer: Freelancer): Promise<void>;
    replaceById(id: string, freelancer: Freelancer): Promise<void>;
    deleteById(id: string): Promise<void>;
}
