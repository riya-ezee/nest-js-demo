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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create(createUserDto) {
        try {
            const findAllContentsData = await this.usersService.create(createUserDto);
            return { data: findAllContentsData, message: 'findAll' };
        }
        catch (error) {
            console.info(error);
        }
    }
    async findAll() {
        try {
            console.info("jchkdj");
            const findAllContentsData = await this.usersService.findAll();
            console.info(findAllContentsData);
            return { data: findAllContentsData, message: 'findAll' };
        }
        catch (error) {
            console.log(error);
        }
    }
    async findOne(param) {
        try {
            const findAllContentsData = await this.usersService.findOne(+param.id);
            return { data: findAllContentsData, message: 'find selected data' };
        }
        catch (error) {
            console.log(error);
        }
    }
    async update(id, updateUserDto) {
        try {
            const findAllContentsData = await this.usersService.update(+id, updateUserDto);
            return { data: findAllContentsData, message: 'findAll' };
        }
        catch (error) {
            console.log(error);
        }
    }
    async remove(id) {
        try {
            const findAllContentsData = await this.usersService.remove(+id);
            return { data: findAllContentsData, message: 'Record Deleted' };
        }
        catch (error) {
            console.log(error);
        }
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: 'Create a new user record' }),
    swagger_1.ApiOkResponse({ description: 'The record has been successfully created.' }),
    swagger_1.ApiResponse({ status: 500, description: 'internal server error' }),
    swagger_1.ApiBadRequestResponse({
        description: "BAD_REQUEST",
    }),
    swagger_1.ApiBody({
        schema: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                },
            },
        },
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOperation({ summary: 'Get user data by id' }),
    swagger_1.ApiNotFoundResponse({ description: 'no task found for Id' }),
    swagger_1.ApiResponse({ status: 500, description: 'internal server error' }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.UpdateUserParamDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
UsersController = __decorate([
    swagger_1.ApiTags('users'),
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map