import { Test, TestingModule } from '@nestjs/testing';
import { AuthLogicService } from './auth-logic.service.js';

describe('AuthService', () => {
  let service: AuthLogicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthLogicService],
    }).compile();

    service = module.get<AuthLogicService>(AuthLogicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
