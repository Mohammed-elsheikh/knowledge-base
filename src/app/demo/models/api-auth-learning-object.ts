/* tslint:disable */
/* eslint-disable */
import { ApiAuthAppPublisher } from './api-auth-app-publisher';
import { ApiAuthApplication } from './api-auth-application';
import { ApiAuthLevel } from './api-auth-level';
import { ApiAuthObjectType } from './api-auth-object-type';
import { ApiAuthPublisher } from './api-auth-publisher';
export interface ApiAuthLearningObject {
  appPublisher?: ApiAuthAppPublisher;
  application?: ApiAuthApplication;
  descriptionAR?: null | string;
  descriptionEN?: null | string;
  id?: null | string;
  level?: ApiAuthLevel;
  notes?: null | string;
  objectType?: ApiAuthObjectType;
  publisher?: ApiAuthPublisher;
  titleAr?: null | string;
  titleEn?: null | string;
  url?: null | string;
}
