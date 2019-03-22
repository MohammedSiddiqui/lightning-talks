import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LOCAL_STORAGE, StorageServiceModule } from 'ngx-webstorage-service';
import { HttpClient } from '@angular/common/http';

import { AuthService } from './auth/auth.service';
import { SERVICE_STORAGE } from '../constants/storage.constant';
import { CogsHttpClient, cogsHttpClientCreator } from './cogs-http-client/cogs-http-client.service';
import { StorageService } from './storage/storage.service';
import { ToastMessageService } from './toast-message/toast-message.service';
import { AppTeamService } from './app-team/app-team.service';
import { GifStoreService } from './gif-store/gif-store.service';
import { TalkService } from './talks/talk.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    StorageServiceModule,
  ],
  providers: [
    {
      provide: SERVICE_STORAGE,
      useExisting: LOCAL_STORAGE,
    },
    {
      provide: CogsHttpClient,
      useFactory: cogsHttpClientCreator,
      deps: [HttpClient],
    },
    StorageService,
    AuthService,
    ToastMessageService,
    AppTeamService,
    GifStoreService,
    TalkService,
  ],
})
export class CoreModule { }
