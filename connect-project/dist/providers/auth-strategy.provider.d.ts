import { Provider, ValueOrPromise } from '@loopback/context';
import { Strategy } from 'passport';
import { AuthenticationMetadata } from '@loopback/authentication';
import { UserRepository } from '../repositories';
export declare class MyAuthStrategyProvider implements Provider<Strategy | undefined> {
    userRepository: UserRepository;
    private metadata;
    constructor(userRepository: UserRepository, metadata: AuthenticationMetadata);
    value(): ValueOrPromise<Strategy | any>;
    con: () => void;
    verify2(token: String, cb: (err: Error | null, user?: Object | false) => void): Promise<void>;
    verify(req: any, username: string, password: string, cb: (err: Error | null, user?: Object | false) => void): Promise<void>;
}
