import { UsersService } from './users.service';
import { UpdateUserParamDto, UpdateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: any): Promise<{
        data: any;
        message: string;
    }>;
    findAll(): Promise<{
        data: import("./entities/user.entity").User[];
        message: string;
    }>;
    findOne(param: UpdateUserParamDto): Promise<{
        data: import("./entities/user.entity").User;
        message: string;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        data: import("typeorm").UpdateResult;
        message: string;
    }>;
    remove(id: string): Promise<{
        data: import("typeorm").DeleteResult;
        message: string;
    }>;
}
