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
exports.ScreensController = void 0;
const common_1 = require("@nestjs/common");
const screens_service_1 = require("./screens.service");
const create_screen_dto_1 = require("./dto/create-screen.dto");
const update_screen_dto_1 = require("./dto/update-screen.dto");
let ScreensController = class ScreensController {
    constructor(screensService) {
        this.screensService = screensService;
    }
    create(createScreenDto) {
        return this.screensService.create(createScreenDto);
    }
    findAll() {
        return this.screensService.findAll();
    }
    findOne(id) {
        return this.screensService.findOne(+id);
    }
    update(id, updateScreenDto) {
        return this.screensService.update(+id, updateScreenDto);
    }
    remove(id) {
        return this.screensService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_screen_dto_1.CreateScreenDto]),
    __metadata("design:returntype", void 0)
], ScreensController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScreensController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScreensController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_screen_dto_1.UpdateScreenDto]),
    __metadata("design:returntype", void 0)
], ScreensController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScreensController.prototype, "remove", null);
ScreensController = __decorate([
    common_1.Controller('screens'),
    __metadata("design:paramtypes", [screens_service_1.ScreensService])
], ScreensController);
exports.ScreensController = ScreensController;
//# sourceMappingURL=screens.controller.js.map