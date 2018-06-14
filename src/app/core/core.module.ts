import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LocalizationModule } from './localization/localization.module';

@NgModule({
  imports: [ HttpClientModule, LocalizationModule ],
  exports: [ LocalizationModule ]
})
export class CoreModule { }
