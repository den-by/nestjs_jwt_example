import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';
import { InjectModel } from '@nestjs/mongoose';
import { EntriesDocument, Entry } from './schemas/entry.schema';

@Injectable()
export class EntriesService {
  constructor(@InjectModel(Entry.name) private entriesModel: Model<EntriesDocument>) {}

  create(createEntryInput: CreateEntryInput) {
    return this.entriesModel.create(createEntryInput);
  }

  findAll() {
    return this.entriesModel.find().exec();
  }

  async findOne(id: string) {
    return await this.entriesModel.findById(id).exec();
  }

  update(id: string, updateEntryInput: UpdateEntryInput) {
    return this.entriesModel.findByIdAndUpdate(id, updateEntryInput).exec();
  }

  remove(id: string) {
    return this.entriesModel.findByIdAndRemove(id);
  }
}
