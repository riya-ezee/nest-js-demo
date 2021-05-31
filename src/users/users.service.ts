import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import con from "../config/database";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
// import { UserRepository } from './users.repository'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }
  
  async create(createUserDto) {
    const userData = await this.userRepository.save(createUserDto);
    if (!userData)
      throw {
        message: "no result",
        code: 101,
      };
    return userData;
  }

  async findAll() {
    const userData = await this.userRepository.find()
    if (!userData)
      throw {
        message: "no result",
        code: 101,
      };
    return userData;
    
  }

  async findOne(id: number) {
    const userData = await this.userRepository.findOne(id);
    if (!userData)
      throw {
        message: "no result",
        code: 101,
      };
    return userData;
    
  }

  async update(id: number, updateUserDto) {
    const userData = await this.userRepository.update(id,updateUserDto);
    if (!userData)
      throw {
        message: "no result",
        code: 101,
      };
    return userData;
  }

  async remove(id: number) {
    const userData = await this.userRepository.delete(id);
    if (!userData)
      throw {
        message: "no result",
        code: 101,
      };
    return userData;
  //   return new Promise(function (resolve, reject) {
  //     try {
  //       con.query(
  //         "delete FROM user WHERE no = " + [id],
  //         (error: any, results: unknown) => {
  //           if (results) {
  //             console.info("Record deleted");
  //             resolve(results);
  //           }
  //         }
  //       );
  //     } catch (error) {
  //       console.info("error" + error);
  //     }
  //   });
  //   // return `This action removes a #${id} user`;
  }
}
