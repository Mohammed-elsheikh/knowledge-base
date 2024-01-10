/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiAuthConfiguration } from '../api-auth-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ApiAuthIChildNodeDto } from '../models/api-auth-i-child-node-dto';
import { ApiAuthIGraphDto } from '../models/api-auth-i-graph-dto';
import { ApiAuthRelationDto } from '../models/api-auth-relation-dto';

@Injectable({
  providedIn: 'root',
})
export class ApiAuthDashboardService extends BaseService {
  constructor(
    config: ApiAuthConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation dashboardGetAll
   */
  static readonly DashboardGetAllPath = '/api/Dashboard/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardGetAll$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetAll$Plain$Response(params?: {

    /**
     * current acive lang
     */
    lang?: any;
  }): Observable<StrictHttpResponse<ApiAuthIGraphDto>> {

    const rb = new RequestBuilder(this.rootUrl, ApiAuthDashboardService.DashboardGetAllPath, 'get');
    if (params) {
      rb.header('lang', params.lang, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApiAuthIGraphDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dashboardGetAll$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetAll$Plain(params?: {

    /**
     * current acive lang
     */
    lang?: any;
  }): Observable<ApiAuthIGraphDto> {

    return this.dashboardGetAll$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApiAuthIGraphDto>) => r.body as ApiAuthIGraphDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetAll$Response(params?: {

    /**
     * current acive lang
     */
    lang?: any;
  }): Observable<StrictHttpResponse<ApiAuthIGraphDto>> {

    const rb = new RequestBuilder(this.rootUrl, ApiAuthDashboardService.DashboardGetAllPath, 'get');
    if (params) {
      rb.header('lang', params.lang, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApiAuthIGraphDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dashboardGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetAll(params?: {

    /**
     * current acive lang
     */
    lang?: any;
  }): Observable<ApiAuthIGraphDto> {

    return this.dashboardGetAll$Response(params).pipe(
      map((r: StrictHttpResponse<ApiAuthIGraphDto>) => r.body as ApiAuthIGraphDto)
    );
  }

  /**
   * Path part for operation dashboardExpand
   */
  static readonly DashboardExpandPath = '/api/Dashboard/Expand';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardExpand$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardExpand$Plain$Response(params?: {
    name?: string;
    id?: string;

    /**
     * current acive lang
     */
    lang?: any;
  }): Observable<StrictHttpResponse<ApiAuthIGraphDto>> {

    const rb = new RequestBuilder(this.rootUrl, ApiAuthDashboardService.DashboardExpandPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('id', params.id, {});
      rb.header('lang', params.lang, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApiAuthIGraphDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dashboardExpand$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardExpand$Plain(params?: {
    name?: string;
    id?: string;

    /**
     * current acive lang
     */
    lang?: any;
  }): Observable<ApiAuthIGraphDto> {

    return this.dashboardExpand$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApiAuthIGraphDto>) => r.body as ApiAuthIGraphDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardExpand()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardExpand$Response(params?: {
    name?: string;
    id?: string;

    /**
     * current acive lang
     */
    lang?: any;
  }): Observable<StrictHttpResponse<ApiAuthIGraphDto>> {

    const rb = new RequestBuilder(this.rootUrl, ApiAuthDashboardService.DashboardExpandPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('id', params.id, {});
      rb.header('lang', params.lang, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApiAuthIGraphDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dashboardExpand$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardExpand(params?: {
    name?: string;
    id?: string;

    /**
     * current acive lang
     */
    lang?: any;
  }): Observable<ApiAuthIGraphDto> {

    return this.dashboardExpand$Response(params).pipe(
      map((r: StrictHttpResponse<ApiAuthIGraphDto>) => r.body as ApiAuthIGraphDto)
    );
  }

  /**
   * Path part for operation dashboardExpandChild
   */
  static readonly DashboardExpandChildPath = '/api/Dashboard/ExpandChild';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardExpandChild$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardExpandChild$Plain$Response(params?: {
    name?: string;

    /**
     * current acive lang
     */
    lang?: any;
  }): Observable<StrictHttpResponse<ApiAuthIChildNodeDto>> {

    const rb = new RequestBuilder(this.rootUrl, ApiAuthDashboardService.DashboardExpandChildPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.header('lang', params.lang, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApiAuthIChildNodeDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dashboardExpandChild$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardExpandChild$Plain(params?: {
    name?: string;

    /**
     * current acive lang
     */
    lang?: any;
  }): Observable<ApiAuthIChildNodeDto> {

    return this.dashboardExpandChild$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApiAuthIChildNodeDto>) => r.body as ApiAuthIChildNodeDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardExpandChild()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardExpandChild$Response(params?: {
    name?: string;

    /**
     * current acive lang
     */
    lang?: any;
  }): Observable<StrictHttpResponse<ApiAuthIChildNodeDto>> {

    const rb = new RequestBuilder(this.rootUrl, ApiAuthDashboardService.DashboardExpandChildPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
      rb.header('lang', params.lang, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApiAuthIChildNodeDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dashboardExpandChild$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardExpandChild(params?: {
    name?: string;

    /**
     * current acive lang
     */
    lang?: any;
  }): Observable<ApiAuthIChildNodeDto> {

    return this.dashboardExpandChild$Response(params).pipe(
      map((r: StrictHttpResponse<ApiAuthIChildNodeDto>) => r.body as ApiAuthIChildNodeDto)
    );
  }

  /**
   * Path part for operation dashboardCreateNode
   */
  static readonly DashboardCreateNodePath = '/api/Dashboard/CreateNode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardCreateNode()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  dashboardCreateNode$Response(params?: {
    nodeType?: string;

    /**
     * current acive lang
     */
    lang?: any;
    body?: any
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiAuthDashboardService.DashboardCreateNodePath, 'post');
    if (params) {
      rb.query('nodeType', params.nodeType, {});
      rb.header('lang', params.lang, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dashboardCreateNode$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  dashboardCreateNode(params?: {
    nodeType?: string;

    /**
     * current acive lang
     */
    lang?: any;
    body?: any
  }): Observable<void> {

    return this.dashboardCreateNode$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation dashboardUpdateNode
   */
  static readonly DashboardUpdateNodePath = '/api/Dashboard/UpdateNode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardUpdateNode()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  dashboardUpdateNode$Response(params?: {
    nodeType?: string;

    /**
     * current acive lang
     */
    lang?: any;
    body?: any
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiAuthDashboardService.DashboardUpdateNodePath, 'post');
    if (params) {
      rb.query('nodeType', params.nodeType, {});
      rb.header('lang', params.lang, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dashboardUpdateNode$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  dashboardUpdateNode(params?: {
    nodeType?: string;

    /**
     * current acive lang
     */
    lang?: any;
    body?: any
  }): Observable<void> {

    return this.dashboardUpdateNode$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation dashboardGetNode
   */
  static readonly DashboardGetNodePath = '/api/Dashboard/GetNode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardGetNode$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetNode$Plain$Response(params?: {
    name?: string;
    id?: string;

    /**
     * current acive lang
     */
    lang?: any;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ApiAuthDashboardService.DashboardGetNodePath, 'post');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('id', params.id, {});
      rb.header('lang', params.lang, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dashboardGetNode$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetNode$Plain(params?: {
    name?: string;
    id?: string;

    /**
     * current acive lang
     */
    lang?: any;
  }): Observable<string> {

    return this.dashboardGetNode$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardGetNode()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetNode$Response(params?: {
    name?: string;
    id?: string;

    /**
     * current acive lang
     */
    lang?: any;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ApiAuthDashboardService.DashboardGetNodePath, 'post');
    if (params) {
      rb.query('name', params.name, {});
      rb.query('id', params.id, {});
      rb.header('lang', params.lang, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dashboardGetNode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardGetNode(params?: {
    name?: string;
    id?: string;

    /**
     * current acive lang
     */
    lang?: any;
  }): Observable<string> {

    return this.dashboardGetNode$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation dashboardCreateRelation
   */
  static readonly DashboardCreateRelationPath = '/api/Dashboard/CreateRelation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardCreateRelation()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  dashboardCreateRelation$Response(params?: {

    /**
     * current acive lang
     */
    lang?: any;
    body?: ApiAuthRelationDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiAuthDashboardService.DashboardCreateRelationPath, 'post');
    if (params) {
      rb.header('lang', params.lang, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dashboardCreateRelation$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  dashboardCreateRelation(params?: {

    /**
     * current acive lang
     */
    lang?: any;
    body?: ApiAuthRelationDto
  }): Observable<void> {

    return this.dashboardCreateRelation$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation dashboardEditRelation
   */
  static readonly DashboardEditRelationPath = '/api/Dashboard/EditRelation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardEditRelation()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  dashboardEditRelation$Response(params?: {

    /**
     * current acive lang
     */
    lang?: any;
    body?: ApiAuthRelationDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiAuthDashboardService.DashboardEditRelationPath, 'post');
    if (params) {
      rb.header('lang', params.lang, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dashboardEditRelation$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  dashboardEditRelation(params?: {

    /**
     * current acive lang
     */
    lang?: any;
    body?: ApiAuthRelationDto
  }): Observable<void> {

    return this.dashboardEditRelation$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
