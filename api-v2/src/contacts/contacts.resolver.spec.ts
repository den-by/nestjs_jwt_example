import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ContactsResolver } from './contacts.resolver';
import { ContactsService } from './contacts.service';
import { Contact } from './schemas/contact.schema';

describe('ContactsResolver', () => {
  let resolver: ContactsResolver;
  const contactModel = new Contact();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactsResolver,
        ContactsService,
        {
          provide: getModelToken(Contact.name),
          useValue: contactModel,
        },
      ],
    }).compile();

    resolver = module.get<ContactsResolver>(ContactsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
