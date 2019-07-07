// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-express-composition
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
import {inject} from '@loopback/context';
import {
  AuthenticationBindings,
  UserProfile,
  authenticate,
} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  put,
  requestBody,
} from '@loopback/rest';
import {Note} from '../models';
import {NoteRepository} from '../repositories';

export class NoteController {
  constructor(
    @inject(AuthenticationBindings.CURRENT_USER, {optional: true})
    private user: UserProfile,
    @repository(NoteRepository)
    public noteRepository: NoteRepository,
  ) {}

  @post('/notes', {
    responses: {
      '200': {
        description: 'Note model instance',
        content: {'application/json': {schema: {'x-ts-type': Note}}},
      },
    },
  })
  async create(@requestBody() note: Note): Promise<Note> {
    return await this.noteRepository.create(note);
  }
  @authenticate('BearerStrategy')
  @get('/notes/count', {
    responses: {
      '200': {
        description: 'Note model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Note)) where?: Where<Note>,
  ): Promise<Count> {
    return await this.noteRepository.count(where);
  }

  @get('/notes', {
    responses: {
      '200': {
        description: 'Array of Note model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Note}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Note))
    filter?: Filter<Note>,
  ): Promise<Note[]> {
    return await this.noteRepository.find(filter);
  }

  @patch('/notes', {
    responses: {
      '200': {
        description: 'Note PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Note, {partial: true}),
        },
      },
    })
    note: Partial<Note>,
    @param.query.object('where', getWhereSchemaFor(Note)) where?: Where<Note>,
  ): Promise<Count> {
    return await this.noteRepository.updateAll(note, where);
  }

  @get('/notes/{id}', {
    responses: {
      '200': {
        description: 'Note model instance',
        content: {'application/json': {schema: {'x-ts-type': Note}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Note> {
    return await this.noteRepository.findById(id);
  }

  @patch('/notes/{id}', {
    responses: {
      '204': {
        description: 'Note PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Note, {partial: true}),
        },
      },
    })
    note: Partial<Note>,
  ): Promise<void> {
    await this.noteRepository.updateById(id, note);
  }

  @put('/notes/{id}', {
    responses: {
      '204': {
        description: 'Note PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() note: Note,
  ): Promise<void> {
    await this.noteRepository.replaceById(id, note);
  }

  @del('/notes/{id}', {
    responses: {
      '204': {
        description: 'Note DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.noteRepository.deleteById(id);
  }
}
