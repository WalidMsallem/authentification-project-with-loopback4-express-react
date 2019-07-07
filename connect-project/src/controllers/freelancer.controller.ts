import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Freelancer} from '../models';
import {FreelancerRepository} from '../repositories';

export class FreelancerController {
  constructor(
    @repository(FreelancerRepository)
    public freelancerRepository : FreelancerRepository,
  ) {}

  @post('/freelancers', {
    responses: {
      '200': {
        description: 'Freelancer model instance',
        content: {'application/json': {schema: {'x-ts-type': Freelancer}}},
      },
    },
  })
  async create(@requestBody() freelancer: Freelancer): Promise<Freelancer> {
    return await this.freelancerRepository.create(freelancer);
  }

  @get('/freelancers/count', {
    responses: {
      '200': {
        description: 'Freelancer model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Freelancer)) where?: Where<Freelancer>,
  ): Promise<Count> {
    return await this.freelancerRepository.count(where);
  }

  @get('/freelancers', {
    responses: {
      '200': {
        description: 'Array of Freelancer model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Freelancer}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Freelancer)) filter?: Filter<Freelancer>,
  ): Promise<Freelancer[]> {
    return await this.freelancerRepository.find(filter);
  }

  @patch('/freelancers', {
    responses: {
      '200': {
        description: 'Freelancer PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Freelancer, {partial: true}),
        },
      },
    })
    freelancer: Freelancer,
    @param.query.object('where', getWhereSchemaFor(Freelancer)) where?: Where<Freelancer>,
  ): Promise<Count> {
    return await this.freelancerRepository.updateAll(freelancer, where);
  }

  @get('/freelancers/{id}', {
    responses: {
      '200': {
        description: 'Freelancer model instance',
        content: {'application/json': {schema: {'x-ts-type': Freelancer}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Freelancer> {
    return await this.freelancerRepository.findById(id);
  }

  @patch('/freelancers/{id}', {
    responses: {
      '204': {
        description: 'Freelancer PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Freelancer, {partial: true}),
        },
      },
    })
    freelancer: Freelancer,
  ): Promise<void> {
    await this.freelancerRepository.updateById(id, freelancer);
  }

  @put('/freelancers/{id}', {
    responses: {
      '204': {
        description: 'Freelancer PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() freelancer: Freelancer,
  ): Promise<void> {
    await this.freelancerRepository.replaceById(id, freelancer);
  }

  @del('/freelancers/{id}', {
    responses: {
      '204': {
        description: 'Freelancer DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.freelancerRepository.deleteById(id);
  }
}
