/* tslint:disable */
/* eslint-disable */
import { ApiAuthILinkDto } from './api-auth-i-link-dto';
import { ApiAuthINodeDto } from './api-auth-i-node-dto';
export interface ApiAuthIGraphDto {
  links?: null | Array<ApiAuthILinkDto>;
  nodes?: null | Array<ApiAuthINodeDto>;
}
