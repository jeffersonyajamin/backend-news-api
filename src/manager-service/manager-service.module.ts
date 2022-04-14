import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppConfigModule } from '../configuration/configuration.module';
import { ManagerHttpService } from './services/management-http.service';

@Module({
  imports: [AppConfigModule, HttpModule],
  providers: [ManagerHttpService],
  exports: [ManagerHttpService],
})
export class ManagerServiceModule {}
