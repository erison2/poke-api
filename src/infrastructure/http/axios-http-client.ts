import { Injectable } from '@nestjs/common';
import { HttpClient } from './http-client.interface';
import axios, { AxiosRequestConfig } from 'axios';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AxiosHttpClient implements HttpClient {
  get<T>(url: string, params?: any): Observable<T> {
    return from(axios.get<T>(url, { params })).pipe(map((response) => response.data));
  }

  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Observable<T> {
    return from(axios.post<T>(url, data, config)).pipe(map((response) => response.data));
  }
}
