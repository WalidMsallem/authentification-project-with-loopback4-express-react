"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("@loopback/context");
const passport_http_bearer_1 = require("passport-http-bearer");
const authentication_1 = require("@loopback/authentication");
const repositories_1 = require("../repositories");
const repository_1 = require("@loopback/repository");
const jwt = require('jsonwebtoken');
let MyAuthStrategyProvider = class MyAuthStrategyProvider {
    constructor(userRepository, metadata) {
        this.userRepository = userRepository;
        this.metadata = metadata;
        this.con = () => {
            console.log('yyy');
        };
    }
    value() {
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
            console.log(new passport_http_bearer_1.Strategy(this.verify2.bind(this)), 'barer');
            return new passport_http_bearer_1.Strategy(this.verify2.bind(this));
        }
        else {
            // return Promise.reject(`The strategy ${name} is not available.`);
            console.log('error');
        }
    }
    async verify2(token, cb) {
        try {
            const user = jwt.verify(token, 'theVerySecurePrivateKey');
            cb(null, user);
        }
        catch (err) {
            cb(null, false);
        }
        // find user by name & password
        // call cb(null, false) when user not found
        // call cb(null, user) when user is authenticated
    }
    async verify(req, username, password, cb) {
        const user = await this.userRepository.findOne({
            where: { username: username },
        });
        if (user) {
            cb(null, user);
        }
        else {
            cb(null, false);
        }
        // find user by name & password
        // call cb(null, false) when user not found
        // call cb(null, user) when user is authenticated
    }
};
MyAuthStrategyProvider = __decorate([
    __param(0, repository_1.repository(repositories_1.UserRepository)),
    __param(1, context_1.inject(authentication_1.AuthenticationBindings.METADATA)),
    __metadata("design:paramtypes", [repositories_1.UserRepository, Object])
], MyAuthStrategyProvider);
exports.MyAuthStrategyProvider = MyAuthStrategyProvider;
//# sourceMappingURL=auth-strategy.provider.js.map