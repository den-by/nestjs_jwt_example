import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { AccountsResolver } from './accounts.resolver';
import { AccountsService } from './accounts.service';
import { Account } from './schemas/account.schema';

describe('AccountsResolver', () => {
  let resolver: AccountsResolver;
  const accountModel = new Account();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccountsResolver,
        AccountsService,
        {
          provide: getModelToken(Account.name),
          useValue: accountModel,
        },
      ],
    }).compile();

    resolver = module.get<AccountsResolver>(AccountsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
