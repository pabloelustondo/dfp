import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export const defaultLanguageCode = 'en';

/**
 * A service that wraps TranslateService and configures it as well.
 * It set a default language to defaultLanguageCode as fallback.
 * It would also sync the language to latest store value from localeSelector.
 */
@Injectable()
export class LocalizationService {
  private locale = defaultLanguageCode;

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang(defaultLanguageCode);
  }
}
