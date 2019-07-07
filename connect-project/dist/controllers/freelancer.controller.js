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
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FreelancerController = class FreelancerController {
    constructor(freelancerRepository) {
        this.freelancerRepository = freelancerRepository;
    }
    async create(freelancer) {
        return await this.freelancerRepository.create(freelancer);
    }
    async count(where) {
        return await this.freelancerRepository.count(where);
    }
    async find(filter) {
        return await this.freelancerRepository.find(filter);
    }
    async updateAll(freelancer, where) {
        return await this.freelancerRepository.updateAll(freelancer, where);
    }
    async findById(id) {
        return await this.freelancerRepository.findById(id);
    }
    async updateById(id, freelancer) {
        await this.freelancerRepository.updateById(id, freelancer);
    }
    async replaceById(id, freelancer) {
        await this.freelancerRepository.replaceById(id, freelancer);
    }
    async deleteById(id) {
        await this.freelancerRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/freelancers', {
        responses: {
            '200': {
                description: 'Freelancer model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Freelancer } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Freelancer]),
    __metadata("design:returntype", Promise)
], FreelancerController.prototype, "create", null);
__decorate([
    rest_1.get('/freelancers/count', {
        responses: {
            '200': {
                description: 'Freelancer model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Freelancer))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FreelancerController.prototype, "count", null);
__decorate([
    rest_1.get('/freelancers', {
        responses: {
            '200': {
                description: 'Array of Freelancer model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Freelancer } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Freelancer))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FreelancerController.prototype, "find", null);
__decorate([
    rest_1.patch('/freelancers', {
        responses: {
            '200': {
                description: 'Freelancer PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Freelancer, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Freelancer))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Freelancer, Object]),
    __metadata("design:returntype", Promise)
], FreelancerController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/freelancers/{id}', {
        responses: {
            '200': {
                description: 'Freelancer model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Freelancer } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FreelancerController.prototype, "findById", null);
__decorate([
    rest_1.patch('/freelancers/{id}', {
        responses: {
            '204': {
                description: 'Freelancer PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Freelancer, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Freelancer]),
    __metadata("design:returntype", Promise)
], FreelancerController.prototype, "updateById", null);
__decorate([
    rest_1.put('/freelancers/{id}', {
        responses: {
            '204': {
                description: 'Freelancer PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Freelancer]),
    __metadata("design:returntype", Promise)
], FreelancerController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/freelancers/{id}', {
        responses: {
            '204': {
                description: 'Freelancer DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FreelancerController.prototype, "deleteById", null);
FreelancerController = __decorate([
    __param(0, repository_1.repository(repositories_1.FreelancerRepository)),
    __metadata("design:paramtypes", [repositories_1.FreelancerRepository])
], FreelancerController);
exports.FreelancerController = FreelancerController;
//# sourceMappingURL=freelancer.controller.js.map