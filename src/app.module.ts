import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://root:hatecrew2@cluster0.hiuluzp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
