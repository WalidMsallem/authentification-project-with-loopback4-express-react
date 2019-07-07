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
let CompanyController = class CompanyController {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async create(company) {
        return await this.companyRepository.create(company);
    }
    async count(where) {
        return await this.companyRepository.count(where);
    }
    async find(filter) {
        return await this.companyRepository.find(filter);
    }
    async updateAll(company, where) {
        return await this.companyRepository.updateAll(company, where);
    }
    async findById(id) {
        return await this.companyRepository.findById(id);
    }
    async updateById(id, company) {
        await this.companyRepository.updateById(id, company);
    }
    async replaceById(id, company) {
        await this.companyRepository.replaceById(id, company);
    }
    async deleteById(id) {
        await this.companyRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/companies', {
        responses: {
            '200': {
                description: 'Company model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Company } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Company]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "create", null);
__decorate([
    rest_1.get('/companies/count', {
        responses: {
            '200': {
                description: 'Company model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Company))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "count", null);
__decorate([
    rest_1.get('/companies', {
        responses: {
            '200': {
                description: 'Array of Company model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Company } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Company))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "find", null);
__decorate([
    rest_1.patch('/companies', {
        responses: {
            '200': {
                description: 'Company PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Company, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Company))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Company, Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/companies/{id}', {
        responses: {
            '200': {
                description: 'Company model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Company } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "findById", null);
__decorate([
    rest_1.patch('/companies/{id}', {
        responses: {
            '204': {
                description: 'Company PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Company, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Company]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "updateById", null);
__decorate([
    rest_1.put('/companies/{id}', {
        responses: {
            '204': {
                description: 'Company PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Company]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/companies/{id}', {
        responses: {
            '204': {
                description: 'Company DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "deleteById", null);
CompanyController = __decorate([
    __param(0, repository_1.repository(repositories_1.CompanyRepository)),
    __metadata("design:paramtypes", [repositories_1.CompanyRepository])
], CompanyController);
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map