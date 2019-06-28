import { NgbComponentsModule } from './ngb-components/ngb-components.module';
import { DtpComponentsModule } from './dtp-components/dtp-components.module';
import { NgModule } from '@angular/core';
import { DtpSharedUtilsComponent } from './dtp-shared-utils.component';

@NgModule({
  declarations: [DtpSharedUtilsComponent],
  imports: [DtpComponentsModule, NgbComponentsModule
  ],
  exports: [DtpSharedUtilsComponent, DtpComponentsModule, NgbComponentsModule]
})
export class DtpSharedUtilsModule { }
