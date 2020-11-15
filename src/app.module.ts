import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://andressa:oscar321@oscarcollection.dyea6.mongodb.net/<dbname>?retryWrites=true&w=majority'),
    MoviesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
