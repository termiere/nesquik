import { Test, TestingModule } from '@nestjs/testing';
import { UsersLogicService } from './users-logic.service.js';

describe('UsersService', () => {
  let service: UsersLogicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersLogicService],
    }).compile();

    service = module.get<UsersLogicService>(UsersLogicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
