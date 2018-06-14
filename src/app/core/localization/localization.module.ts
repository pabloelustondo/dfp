import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { translateLoaderFactory } from './translate-loader.factory';
import { LocalizationService } from './localization.service';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [LocalizationService],
  exports: [TranslateModule]
})
export class LocalizationModule {
  /**
   * Inject LocalizationService here to make constructor code in LocalizationService to run
   * @param {LocalizationService} _
   */
  constructor(_: LocalizationService) {}
}
