import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';

import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const link_db = `${process.env.DB}+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.CLUSTER_DB}.etca6ii.mongodb.net/?retryWrites=true&w=majority`;

@Module({
  imports: [
    UsersModule,
    ClientsModule,
    MongooseModule.forRoot(
      'mongodb+srv://geferson:1234@cluster0.bc1wzan.mongodb.net/?retryWrites=true&w=majority',
    ),
    AuthModule,
  ],
})
export class AppModule {}
