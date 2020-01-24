import { CreateRegionDto, RegionInput } from './types/region.input';
import { RegionService } from './region.service';
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";

@Resolver('Region')
export class RegionResolver {
    constructor(
        private readonly regionService: RegionService
      ) {}
    
      @Query(() => String)
      async hello() {
        return "hello as";
      }
    
      @Query(() => [CreateRegionDto])
      async regions() {
        return this.regionService.findAll();
      }
      @Query(() => CreateRegionDto)
      async region(
        @Args('id') id: string
      ){
        return this.regionService.findOne(id);
      }
    
      @Mutation(() => CreateRegionDto)
      async createRegion(@Args('input') input: RegionInput) {
        return this.regionService.create(input);
      }

      @Mutation(() => CreateRegionDto)
      async updateRegion(
        @Args('id') id: string,
        @Args('input') input: RegionInput
      ): Promise<RegionInput>{
        return this.regionService.update(id, input);

      }

      @Mutation(() => CreateRegionDto)
      async deleteRegion(
        @Args('id') id: string
      ):Promise<RegionInput>{
        return this.regionService.delete(id);
      }
}
