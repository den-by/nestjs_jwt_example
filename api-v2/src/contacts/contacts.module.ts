import { forwardRef, Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsResolver } from './contacts.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Contact, ContactSchema } from './schemas/contact.schema';
import { UsersModule } from '@/users/users.module';
import { TransactionsModule } from '@/transactions/transactions.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }]),
    forwardRef(() => UsersModule),
    forwardRef(() => TransactionsModule),
  ],
  providers: [ContactsResolver, ContactsService],
  exports: [ContactsService],
})
export class ContactsModule {}
