import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { EntriesService } from './entries.service';
import { Entry } from './schemas/entry.schema';

describe('EntriesService', () => {
  let service: EntriesService;
  const entryModel = new Entry();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EntriesService,
        {
          provide: getModelToken(Entry.name),
          useValue: entryModel,
        },
      ],
    }).compile();

    service = module.get<EntriesService>(EntriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
