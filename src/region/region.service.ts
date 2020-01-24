import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Region, RegionInput } from './types/region.input';

@Injectable()
export class RegionService {
    constructor(
        @InjectModel('Region')
         private readonly regionModel: Model<Region>) {}
       
  
    async create(createRegionDto: RegionInput): Promise<Region> {
      const createdRegion = new this.regionModel(createRegionDto);
      return await createdRegion.save();
    }
  
    async findAll(): Promise<Region[]> {
      return this.regionModel.find().exec();
    }

    async findOne(
      id: string
    ): Promise<Region> {
      return await this.regionModel.findOne({
        _id : id
      })
    }

    async update(
      id:string,
      input: RegionInput
    ):Promise<Region>{
      return await this.regionModel.findByIdAndUpdate(
        id, input, {new: true}
      )
    }

    async delete(
      id: string
    ): Promise<Region>{
      return await this.regionModel.findByIdAndRemove(id);
    }
}
