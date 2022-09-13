import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsResolver } from './transactions.resolver';
import { TransactionsService } from './transactions.service';
import { Transaction } from './schemas/transaction.schema';

describe('TransactionsResolver', () => {
  let resolver: TransactionsResolver;
  const transactionModel = new Transaction();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransactionsResolver,
        TransactionsService,
        {
          provide: getModelToken(Transaction.name),
          useValue: transactionModel,
        },
      ],
    }).compile();

    resolver = module.get<TransactionsResolver>(TransactionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
