import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AddSuperheroDto } from '../src/superhero/dto/addSuperhero.dto';
import { Superhero } from '../src/superhero/interface/superhero.interface';
import { SuperheroModule } from '../src/superhero/superhero.module';
import { SuperheroService } from '../src/superhero/superhero.service';

describe('Superheroes (e2e)', () => {
  let app: INestApplication;
  const superheroService = {
    create: jest.fn(
      (addSuperheroDto: AddSuperheroDto): Superhero => addSuperheroDto,
    ),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [SuperheroModule],
    })
      .overrideProvider(SuperheroService)
      .useValue(superheroService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /superheroes', async () => {
    const newSuperhero = {
      name: 'Iron Man',
      superpower: 'Tech Genius',
      humilityScore: 7,
    };

    return request(app.getHttpServer())
      .post('/superheroes')
      .send(newSuperhero)
      .expect(201)
      .expect(newSuperhero);
  });
});
