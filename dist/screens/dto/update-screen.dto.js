"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScreenDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_screen_dto_1 = require("./create-screen.dto");
class UpdateScreenDto extends swagger_1.PartialType(create_screen_dto_1.CreateScreenDto) {
}
exports.UpdateScreenDto = UpdateScreenDto;
//# sourceMappingURL=update-screen.dto.js.map