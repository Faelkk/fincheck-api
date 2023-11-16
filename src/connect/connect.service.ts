import { Injectable, OnModuleInit } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class ConnectService implements OnModuleInit {
  async onModuleInit() {
    await mongoose.connect(process.env.DATABASE_URL).then(() => {
      console.log('Connection to MongoDB successfully established!');
    });
  }
}
