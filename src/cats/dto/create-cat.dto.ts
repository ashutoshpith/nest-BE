import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class CreateCatDto {

    @Field(() => ID)
     id: string;

    // @IsString()
    @Field()
    readonly name: string;
    
    // @IsInt()
    @Field(() => Int)
    readonly age: number;
    
    // @IsString()
    @Field()
    readonly breed: string;

}