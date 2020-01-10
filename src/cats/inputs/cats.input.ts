import { InputType, Field, Int, ID } from 'type-graphql';

@InputType()
export class CatsInput {

    // @Field(() => ID)
    // readonly id: string

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