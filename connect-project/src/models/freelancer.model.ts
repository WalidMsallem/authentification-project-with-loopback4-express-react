import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Freelancer extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  occupation: string;


  constructor(data?: Partial<Freelancer>) {
    super(data);
  }
}

export interface FreelancerRelations {
  // describe navigational properties here
}

export type FreelancerWithRelations = Freelancer & FreelancerRelations;
