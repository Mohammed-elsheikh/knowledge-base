/* tslint:disable */
/* eslint-disable */
import { ApiAuthCategory } from './api-auth-category';
import { ApiAuthSectionType } from './api-auth-section-type';
export interface ApiAuthSubject {
  category?: ApiAuthCategory;
  id?: null | string;
  order?: number;
  sectionType?: ApiAuthSectionType;
  titleAr?: null | string;
  titleEn?: null | string;
}
