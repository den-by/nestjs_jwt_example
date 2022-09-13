import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateContactInput } from './dto/create-contact.input';
import { UpdateContactInput } from './dto/update-contact.input';
import { InjectModel } from '@nestjs/mongoose';
import { Contact, ContactDocument } from './schemas/contact.schema';

@Injectable()
export class ContactsService {
  constructor(@InjectModel(Contact.name) private contactsModel: Model<ContactDocument>) {}

  async create(createContactInput: CreateContactInput) {
    return await this.contactsModel.create(createContactInput);
  }

  async findAll() {
    return await this.contactsModel.find().exec();
  }

  async findOne(id: string) {
    return await this.contactsModel.findById(id).exec();
  }

  async update(id: string, updateContactInput: UpdateContactInput) {
    return await this.contactsModel.findByIdAndUpdate(id, updateContactInput).exec();
  }

  async remove(id: string) {
    return await this.contactsModel.findByIdAndRemove(id);
  }
}
