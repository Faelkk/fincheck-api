import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { env } from '../../shared/config/env';

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: env.jwtSecret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthService],
})
export class AuthModule {}
