import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/**
 * Factory function that returns a new instance of TranslateHttpLoader
 * @param {HttpClient} http
 * @returns {TranslateHttpLoader}
 */
export function translateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/localization/', '.json');
}
