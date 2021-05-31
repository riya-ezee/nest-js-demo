import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto,UpdateUserParamDto,UpdateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOkResponse, ApiResponse, ApiBody, ApiOperation, ApiCreatedResponse, ApiHeader, ApiNotFoundResponse, ApiConsumes, ApiBadRequestResponse } from '@nestjs/swagger'

@ApiTags('users')
@Controller('users') 
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
 
  @Post()
  // @ApiHeader({
  //   name: 'X-MyHeader',
  //   description: 'Custom header',
  // })

  @ApiOperation({ summary: 'Create a new user record' })
  @ApiOkResponse({ description: 'The record has been successfully created.'})
  @ApiResponse({ status: 500, description: 'internal server error'})
  @ApiBadRequestResponse({
    description: "BAD_REQUEST",
  })
  // @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
      },
    },
  })
 
  async create(@Body() createUserDto) {
    try {
      const findAllContentsData = await this.usersService.create(createUserDto);
      return { data: findAllContentsData, message: 'findAll' }
    } catch (error) {
      console.info(error)
    }
  }

  @Get()
  async findAll() {
    try {
      console.info("jchkdj")
      const findAllContentsData = await this.usersService.findAll()
      console.info(findAllContentsData)
      return { data: findAllContentsData, message: 'findAll' }
    } catch (error) {
      console.log(error)
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user data by id' })
  @ApiNotFoundResponse({ description: 'no task found for Id'})
  @ApiResponse({ status: 500, description: 'internal server error'})
  async findOne(@Param() param: UpdateUserParamDto) {
    try {
      const findAllContentsData = await this.usersService.findOne(+param.id)
      return { data: findAllContentsData, message: 'find selected data' }
    } catch (error) {
      console.log(error)
    }
  }
 
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) { 
    try {
      const findAllContentsData = await this.usersService.update(+id,updateUserDto)
      return { data: findAllContentsData, message: 'findAll' }
    } catch (error) {
      console.log(error)
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const findAllContentsData = await this.usersService.remove(+id)
      return { data: findAllContentsData, message: 'Record Deleted' }
    } catch (error) {
      console.log(error)
    }
  }
}
