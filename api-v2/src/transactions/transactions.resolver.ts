import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { TransactionsService } from './transactions.service';
import { Transaction } from './schemas/transaction.schema';
import { CreateTransactionInput } from './dto/create-transaction.input';
import { UpdateTransactionInput } from './dto/update-transaction.input';
import { SkipAuth } from '@/decorators/skip-auth.decorator';
import { EntriesService } from '@/entries/entries.service';
import { ContactsService } from '@/contacts/contacts.service';
import { AccountsService } from '@/accounts/accounts.service';

@Resolver(() => Transaction)
export class TransactionsResolver {
  constructor(
    private readonly transactionsService: TransactionsService,
    private readonly entriesService: EntriesService,
    private readonly contactsService: ContactsService,
    private readonly accountsService: AccountsService,
  ) {}

  @SkipAuth()
  @Mutation(() => Transaction)
  createTransaction(
    @Args('createTransactionInput') createTransactionInput: CreateTransactionInput,
  ) {
    return this.transactionsService.create(createTransactionInput);
  }

  @SkipAuth()
  @Query(() => [Transaction], { name: 'transactions' })
  findAll() {
    return this.transactionsService.findAll();
  }

  @SkipAuth()
  @Query(() => Transaction, { name: 'transaction' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.transactionsService.findOne(id);
  }

  @SkipAuth()
  @Mutation(() => Transaction)
  updateTransaction(
    @Args('updateTransactionInput') updateTransactionInput: UpdateTransactionInput,
  ) {
    return this.transactionsService.update(updateTransactionInput.id, updateTransactionInput);
  }

  @SkipAuth()
  @Mutation(() => Transaction)
  removeTransaction(@Args('id', { type: () => String }) id: string) {
    return this.transactionsService.remove(id);
  }

  @ResolveField()
  async entry(@Parent() transaction: Transaction) {
    return await this.entriesService.findOne(transaction.entryId);
  }

  @ResolveField()
  async account(@Parent() transaction: Transaction) {
    return await this.accountsService.findOne(transaction.accountId);
  }

  @ResolveField()
  async contact(@Parent() transaction: Transaction) {
    return await this.contactsService.findOne(transaction.contactId);
  }
}
