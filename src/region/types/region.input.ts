import { InputType, Field, Int, ID, ObjectType } from 'type-graphql';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@InputType()
export class RegionInput {

  
    @Field()
    readonly name: string;
    
    // @IsInt()
    @Field()
    readonly description: string;
    
    // @IsString()
    @Field()
    readonly country: string;

}

export interface Region extends Document {
    readonly name: string;
    readonly description: string;
    readonly country: string;
}


@ObjectType()
export class CreateRegionDto {

    @Field(() => ID)
     id: string;

    @Field()
    readonly name: string;
    
    @Field()
    readonly description: string;
    
    @Field()
    readonly country: string;

}


export const RegionSchema = new mongoose.Schema({
  name: String,
  description: String,
  country: String
});