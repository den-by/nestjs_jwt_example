import { forwardRef, Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsResolver } from './transactions.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Transaction, TransactionSchema } from './schemas/transaction.schema';
import { EntriesModule } from '@/entries/entries.module';
import { AccountsModule } from '@/accounts/accounts.module';
import { ContactsModule } from '@/contacts/contacts.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Transaction.name, schema: TransactionSchema }]),
    forwardRef(() => EntriesModule),
    forwardRef(() => AccountsModule),
    forwardRef(() => ContactsModule),
  ],
  providers: [TransactionsResolver, TransactionsService],
  exports: [TransactionsService],
})
export class TransactionsModule {}
