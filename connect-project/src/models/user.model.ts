import {Entity, model, property} from '@loopback/repository';

const jwt = require('jsonwebtoken');
@model({settings: {}})
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  constructor(data?: Partial<User>) {
    super(data);
  }

  generateAuthToken() {
    const token = jwt.sign(
      {_id: this._id, username: this.username, email: this.email},
      'theVerySecurePrivateKey',
    );
    return token;
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
