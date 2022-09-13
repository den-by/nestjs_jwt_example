import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateTransactionInput } from './dto/create-transaction.input';
import { UpdateTransactionInput } from './dto/update-transaction.input';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction, TransactionDocument } from './schemas/transaction.schema';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name) private transactionsModel: Model<TransactionDocument>,
  ) {}

  async create(createTransactionInput: CreateTransactionInput) {
    return await this.transactionsModel.create(createTransactionInput);
  }

  async findAll() {
    return await this.transactionsModel.find().exec();
  }

  async findByContactId(contactId: string) {
    return await this.transactionsModel.find({ contactId: contactId }).exec();
  }

  async findOne(id: string) {
    return await this.transactionsModel.findById(id).exec();
  }

  async update(id: string, updateTransactionInput: UpdateTransactionInput) {
    return await this.transactionsModel.findByIdAndUpdate(id, updateTransactionInput).exec();
  }

  async remove(id: string) {
    return await this.transactionsModel.findByIdAndRemove(id);
  }
}
