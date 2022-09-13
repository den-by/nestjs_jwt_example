import { Module } from '@nestjs/common';
import { EntriesService } from './entries.service';
import { EntriesResolver } from './entries.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Entry, EntrySchema } from './schemas/entry.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Entry.name, schema: EntrySchema }])],
  providers: [EntriesResolver, EntriesService],
  exports: [EntriesService],
})
export class EntriesModule {}
