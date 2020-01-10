import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CatsResolver } from './cats.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './cats.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService, CatsResolver],
  exports: [CatsService]
})
export class CatsModule {}
