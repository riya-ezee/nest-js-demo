// export class CreateUserDto {}
import { ApiProperty } from "@nestjs/swagger";

// import {
//     IsEmail,
//     IsString,
//     Length,
//     MinLength,
//     IsDefined,
//     IsNotEmpty,
//     IsNumberString,
//   } from "class-validator";
  
  export class CreateUserDto {
    // @IsString()
    // @MinLength(5, { message: "name should be minimum of 5 characters" })
    @ApiProperty()
    public name?: string;
  }
  
  export class UpdateUserParamDto {
    @ApiProperty()
    public id: number;
  }
  
  export class UpdateUserDto {
    @ApiProperty()
    public name?: string;
  }
  