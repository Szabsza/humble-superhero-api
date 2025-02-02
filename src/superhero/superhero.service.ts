import { Injectable } from '@nestjs/common';
import { Superhero } from './interface/superhero.interface';

@Injectable()
export class SuperheroService {
  private superheroes: Superhero[] = [];

  public create(superhero: Superhero): Superhero {
    this.superheroes.push(superhero);

    return superhero;
  }

  public findAllSortedByHumilityScore(): Superhero[] {
    const sortedSuperheroes = [...this.superheroes].sort(
      (superheroA, superheroB) =>
        superheroA.humilityScore - superheroB.humilityScore,
    );

    return sortedSuperheroes;
  }
}
