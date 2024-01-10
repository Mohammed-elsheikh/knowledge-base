/* tslint:disable */
/* eslint-disable */
import { ApiAuthSectionType } from './api-auth-section-type';
import { ApiAuthSubject } from './api-auth-subject';
export interface ApiAuthGrade {
  id?: null | string;
  sectionType?: ApiAuthSectionType;
  subjects?: null | Array<ApiAuthSubject>;
  titleAr?: null | string;
  titleEn?: null | string;
}
