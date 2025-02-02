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

  /**
   * Handle GET requests to the /superheroes endpoint.
   * This will return a list of superheroes sorted by their humility score in ascending order.
   * @returns An array of superheroes sorted by humility score.
   */
  @Get()
  public findAllSortedByHumilityScore(): Superhero[] {
    return this.superheroService.findAllSortedByHumilityScore();
  }

  /**
   * Handle POST requests to the /superheroes endpoint.
   * This endpoint will allow users to add a new superhero to the list.
   * It uses a DTO (Data Transfer Object) to validate the incoming data.
   * @param addSuperheroDto - The data transfer object containing superhero data (name, superpower, humility score).
   * @returns The newly created superhero object.
   */
  @Post()
  @UsePipes(new ValidationPipe()) // Use ValidationPipe to automatically validate incoming data
  public addSuperhero(@Body() addSuperheroDto: AddSuperheroDto): Superhero {
    return this.superheroService.create(addSuperheroDto);
  }
}
