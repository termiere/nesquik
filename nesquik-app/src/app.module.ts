import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from './http/http.module.js';
import { LogicModule } from './logic/logic.module.js';
import { DataModule } from './data/data.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'postgres',
      password: 'postgres',
      database: 'nesquik',
      autoLoadEntities: true,
      synchronize: true,
    }),
    HttpModule,
    LogicModule,
    DataModule,
  ],
})
export class AppModule {}
