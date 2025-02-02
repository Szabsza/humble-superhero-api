import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddSuperheroDto } from './dto/addSuperhero.dto';
import { Superhero } from './interface/superhero.interface';
import { SuperheroService } from './superhero.service';

@Controller('superheroes')
export class SuperheroController {
  constructor(private superheroService: SuperheroService) {}

  @Get()
  public findAllSortedByHumilityScore(): Superhero[] {
    return this.superheroService.findAllSortedByHumilityScore();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  public addSuperhero(@Body() addSuperheroDto: AddSuperheroDto): Superhero {
    return this.superheroService.create(addSuperheroDto);
  }
}
