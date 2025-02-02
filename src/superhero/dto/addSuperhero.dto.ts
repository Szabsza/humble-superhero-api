import { IsString, IsInt, IsNotEmpty, Min, Max } from 'class-validator';

export class AddSuperheroDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  superpower: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1, { message: 'Humility score must be at least 1' })
  @Max(10, { message: 'Humility score must not exceed 10' })
  humilityScore: number;
}
