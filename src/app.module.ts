import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity'
import { ScreensModule } from './screens/screens.module';
 
@Module({
  imports: [ TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "sample",
    entities: [User],
    synchronize: true,
    logging: false,
  }),UsersModule, ScreensModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
