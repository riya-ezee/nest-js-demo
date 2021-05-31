import { CreateScreenDto } from './dto/create-screen.dto';
import { UpdateScreenDto } from './dto/update-screen.dto';
export declare class ScreensService {
    create(createScreenDto: CreateScreenDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateScreenDto: UpdateScreenDto): string;
    remove(id: number): string;
}
