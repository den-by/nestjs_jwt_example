import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AccountsService } from './accounts.service';
import { Account } from './schemas/account.schema';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { SkipAuth } from '@/decorators/skip-auth.decorator';

@Resolver(() => Account)
export class AccountsResolver {
  constructor(private readonly accountsService: AccountsService) {}

  @SkipAuth()
  @Mutation(() => Account)
  createAccount(@Args('createAccountInput') createAccountInput: CreateAccountInput) {
    return this.accountsService.create(createAccountInput);
  }

  @SkipAuth()
  @Query(() => [Account], { name: 'accounts' })
  findAll() {
    return this.accountsService.findAll();
  }

  @SkipAuth()
  @Query(() => Account, { name: 'account' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.accountsService.findOne(id);
  }

  @Mutation(() => Account)
  updateAccount(@Args('updateAccountInput') updateAccountInput: UpdateAccountInput) {
    return this.accountsService.update(updateAccountInput.id, updateAccountInput);
  }

  @Mutation(() => Account)
  removeAccount(@Args('id', { type: () => String }) id: string) {
    return this.accountsService.remove(id);
  }
}
