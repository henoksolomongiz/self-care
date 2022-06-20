import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeaderInterceptor } from './interceptor/http-header.interceptor';
import { LocalStorageService } from './service/local-storage.service';
import { AuthGuardService } from './service/auth-guard.service';
import { NotificationService } from './service/notification.service';

export { LocalStorageService, AuthGuardService, NotificationService };

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeaderInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
