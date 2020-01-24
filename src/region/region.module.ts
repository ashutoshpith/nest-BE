import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionResolver } from './region.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { RegionSchema } from './types/region.input';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Region', schema: RegionSchema }])],
  providers: [
    RegionService,
     RegionResolver]
})
export class RegionModule {}
