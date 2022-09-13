import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { InjectModel } from '@nestjs/mongoose';
import { Account, AccountsDocument } from './schemas/account.schema';

@Injectable()
export class AccountsService {
  constructor(@InjectModel(Account.name) private accountsModel: Model<AccountsDocument>) {}

  create(createAccountInput: CreateAccountInput) {
    return this.accountsModel.create(createAccountInput);
  }

  findAll() {
    return this.accountsModel.find().exec();
  }

  async findOne(id: string) {
    return await this.accountsModel.findById(id).exec();
  }

  update(id: string, updateAccountInput: UpdateAccountInput) {
    return this.accountsModel.findByIdAndUpdate(id, updateAccountInput).exec();
  }

  remove(id: string) {
    return this.accountsModel.findByIdAndRemove(id);
  }
}
