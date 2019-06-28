import { DtpComponentsModule } from './dtp-components/dtp-components.module';
import { NgModule } from '@angular/core';
import { DtpSharedUtilsComponent } from './dtp-shared-utils.component';

@NgModule({
  declarations: [DtpSharedUtilsComponent],
  imports: [DtpComponentsModule
  ],
  exports: [DtpSharedUtilsComponent, DtpComponentsModule]
})
export class DtpSharedUtilsModule { }
