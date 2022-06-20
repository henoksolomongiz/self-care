import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeaderInterceptor } from './interceptor/http-header.interceptor';
import { LocalStorageService } from './service/local-storage.service';
import { AuthGuardService } from './service/auth-guard.service';
import { NotificationService } from './service/notification.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export { LocalStorageService, AuthGuardService, NotificationService };

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatRippleModule, MatSnackBarModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeaderInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
