import { Observable } from 'rxjs';

export interface HttpClient {
  get<T>(url: string, params?: any): Observable<T>;
  post<T>(url: string, data?: any, config?: any): Observable<T>;
}
