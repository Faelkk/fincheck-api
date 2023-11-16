import { Controller } from '@nestjs/common';
import { ConnectService } from './connect.service';

@Controller('connect')
export class ConnectController {
  constructor(private readonly connectService: ConnectService) {}
}
