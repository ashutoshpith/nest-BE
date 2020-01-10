import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}
   
    @Get()
    index(): string {
        return "this is index";
    }

    @Get('create')
    create(): string {
        return "this is create";
    }

    @Get('findall')
     async findAll(): Promise<Cat[]>{
        return this.catsService.findAll();
    }
}
