import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { GraphQLError } from 'graphql';
import { GqlJwtAuthGuard } from '@/guards/gql-jwt-auth.guard';
import { RolesGuard } from '@/guards/roles.guard';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from '@/transactions/transactions.module';
import { ContactsModule } from '@/contacts/contacts.module';
import { EntriesModule } from '@/entries/entries.module';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql.schema.gql'),
      sortSchema: true,
      driver: ApolloDriver,
      formatError: (error: GraphQLError) => ({
        message: error.message,
      }),
    }),
    UsersModule,
    AuthModule,
    AccountsModule,
    TransactionsModule,
    ContactsModule,
    EntriesModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: GqlJwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
