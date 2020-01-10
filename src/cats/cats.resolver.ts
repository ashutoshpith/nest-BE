import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CatsService } from './cats.service';
import { CreateCatDto } from "./dto/create-cat.dto";
import { CatsInput } from './inputs/cats.input';

@Resolver()
export class CatsResolver {
  constructor(
    private readonly catsService: CatsService
  ) {}

  @Query(() => String)
  async hello() {
    return "hello as";
  }

  @Query(() => [CreateCatDto])
  async cats() {
    return this.catsService.findAll();
  }

  @Mutation(() => CreateCatDto)
  async createCat(@Args('input') input: CatsInput) {
    return this.catsService.create(input);
  }

}