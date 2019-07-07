import {Provider, inject, ValueOrPromise} from '@loopback/context';
import {Strategy} from 'passport';
import {Strategy as BearerStrategy} from 'passport-http-bearer';
import {
  AuthenticationBindings,
  AuthenticationMetadata,
  UserProfile,
} from '@loopback/authentication';
import {BasicStrategy} from 'passport-http';
import {UserRepository} from '../repositories';
import {repository} from '@loopback/repository';
const jwt = require('jsonwebtoken');
export class MyAuthStrategyProvider implements Provider<Strategy | undefined> {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @inject(AuthenticationBindings.METADATA)
    private metadata: AuthenticationMetadata,
  ) {}

  value(): ValueOrPromise<Strategy | any> {
    // The function was not decorated, so we shouldn't attempt authentication
    if (!this.metadata) {
      return undefined;
    }
    const name = this.metadata.strategy;
    if (name === 'BasicStrategy') {
      console.log('hellossssssssssss');
      // return new BasicStrategy(this.verify.bind(this));
    }
    if (name === 'BearerStrategy') {
      console.log(new BearerStrategy(this.verify2.bind(this)), 'barer');
      return new BearerStrategy(this.verify2.bind(this));
    } else {
      // return Promise.reject(`The strategy ${name} is not available.`);
      console.log('error');
    }
  }
  con = () => {
    console.log('yyy');
  };
  async verify2(
    token: String,
    cb: (err: Error | null, user?: Object | false) => void,
  ) {
    try {
      const user = jwt.verify(token, 'theVerySecurePrivateKey');
      cb(null, user);
    } catch (err) {
      cb(null, false);
    }
    // find user by name & password
    // call cb(null, false) when user not found
    // call cb(null, user) when user is authenticated
  }
  async verify(
    req: any,
    username: string,
    password: string,
    cb: (err: Error | null, user?: Object | false) => void,
  ) {
    const user = await this.userRepository.findOne({
      where: {username: username},
    });
    if (user) {
      cb(null, user);
    } else {
      cb(null, false);
    }
    // find user by name & password
    // call cb(null, false) when user not found
    // call cb(null, user) when user is authenticated
  }
}
