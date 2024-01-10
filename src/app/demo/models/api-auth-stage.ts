/* tslint:disable */
/* eslint-disable */
import { ApiAuthGrade } from './api-auth-grade';
import { ApiAuthSectionType } from './api-auth-section-type';
export interface ApiAuthStage {
  grades?: null | Array<ApiAuthGrade>;
  id?: null | string;
  sectionType?: ApiAuthSectionType;
  titleAr?: null | string;
  titleEn?: null | string;
}
