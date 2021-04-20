import { Test, TestingModule } from '@nestjs/testing';
import { BaamController } from './baam.controller';
import { BaamService } from './baam.service';

describe('BaamController', () => {
  let baamController: BaamController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BaamController],
      providers: [BaamService],
    }).compile();

    baamController = app.get<BaamController>(BaamController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(baamController.getHello()).toBe('Hello World!');
    });
  });
});
