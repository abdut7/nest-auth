import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserService } from './shared/user.service';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [AuthModule   ,SharedModule],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService,UserService],
})
export class AppModule {}
