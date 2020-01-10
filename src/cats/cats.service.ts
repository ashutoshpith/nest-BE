import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsInput } from './inputs/cats.input';

@Injectable()
export class CatsService {
  constructor(
      @InjectModel('Cat')
       private readonly catModel: Model<Cat>) {}
      //  private readonly cats: Cat[] = [];

  async create(createCatDto: CatsInput): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}