import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { EntriesResolver } from './entries.resolver';
import { EntriesService } from './entries.service';
import { Entry } from './schemas/entry.schema';

describe('EntriesResolver', () => {
  let resolver: EntriesResolver;
  const entryModel = new Entry();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EntriesResolver,
        EntriesService,
        {
          provide: getModelToken(Entry.name),
          useValue: entryModel,
        },
      ],
    }).compile();

    resolver = module.get<EntriesResolver>(EntriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
