import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { ContactsService } from './contacts.service';
import { Contact } from './schemas/contact.schema';
import { CreateContactInput } from './dto/create-contact.input';
import { UpdateContactInput } from './dto/update-contact.input';
import { SkipAuth } from '@/decorators/skip-auth.decorator';
import { UsersService } from '@/users/users.service';
import { TransactionsService } from '@/transactions/transactions.service';

@Resolver(() => Contact)
export class ContactsResolver {
  constructor(
    private readonly contactsService: ContactsService,
    private readonly usersService: UsersService,
    private readonly transactionsService: TransactionsService,
  ) {}

  @SkipAuth()
  @Mutation(() => Contact)
  createContact(@Args('createContactInput') createContactInput: CreateContactInput) {
    return this.contactsService.create(createContactInput);
  }

  @SkipAuth()
  @Query(() => [Contact], { name: 'contacts' })
  findAll() {
    return this.contactsService.findAll();
  }

  @SkipAuth()
  @Query(() => Contact, { name: 'contact' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.contactsService.findOne(id);
  }

  @SkipAuth()
  @Mutation(() => Contact)
  updateContact(@Args('updateContactInput') updateContactInput: UpdateContactInput) {
    return this.contactsService.update(updateContactInput.id, updateContactInput);
  }

  @SkipAuth()
  @Mutation(() => Contact)
  removeContact(@Args('id', { type: () => String }) id: string) {
    return this.contactsService.remove(id);
  }

  @ResolveField()
  async user(@Parent() contact: Contact) {
    return await this.usersService.findByCompanyId(contact.companyId);
  }

  @ResolveField()
  async transactions(@Parent() contact: Contact) {
    return await this.transactionsService.findByContactId(contact._id);
  }
}
