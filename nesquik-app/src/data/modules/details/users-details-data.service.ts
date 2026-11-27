import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Details } from './entities/users-details-data.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserDetailsDataService {
  constructor(
    @InjectRepository(Details) private readonly repository: Repository<Details>,
  ) {}

  async getAllDetails() {
    return this.repository.find();
  }

  async findDetailsByUserId(userId: number) {
    return this.repository.findOneBy({ user_id: userId });
  }

  async createDetails(userId: number, data: string) {
    const details = this.repository.create({ user_id: userId, data });
    return this.repository.save(details);
  }

  async updateDetails(id: number, data: string) {
    return this.repository.update({ id }, { data });
  }

  async deleteDetails(id: number) {
    return this.repository.delete({ id });
  }
}
