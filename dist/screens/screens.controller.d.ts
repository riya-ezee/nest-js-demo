import { ScreensService } from './screens.service';
import { CreateScreenDto } from './dto/create-screen.dto';
import { UpdateScreenDto } from './dto/update-screen.dto';
export declare class ScreensController {
    private readonly screensService;
    constructor(screensService: ScreensService);
    create(createScreenDto: CreateScreenDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateScreenDto: UpdateScreenDto): string;
    remove(id: string): string;
}
