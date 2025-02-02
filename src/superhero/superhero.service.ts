import { Injectable } from '@nestjs/common';
import { Superhero } from './interface/superhero.interface';

@Injectable()
export class SuperheroService {
  private superheroes: Superhero[] = [];

  /**
   * Create a new superhero and add it to the in-memory list.
   * @param superhero - The superhero object containing name, superpower and humility score.
   * @returns The newly added superhero object.
   */
  public create(superhero: Superhero): Superhero {
    this.superheroes.push(superhero);

    return superhero;
  }

  /**
   * Get a sorted list of superheroes based on their humility score in ascending order.
   * The superheroes with lower humility scores will appear first in the list.
   * @returns A sorted array of superheroes based on humility score.
   */
  public findAllSortedByHumilityScore(): Superhero[] {
    // Make a copy of the superheroes array to avoid modifying the original array in place.
    // Sorting will be done on the copy to keep the original array intact.
    const sortedSuperheroes = [...this.superheroes].sort(
      (superheroA, superheroB) =>
        superheroA.humilityScore - superheroB.humilityScore,
    );

    return sortedSuperheroes;
  }
}
