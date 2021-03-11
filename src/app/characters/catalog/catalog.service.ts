import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Response, Character } from './models/characters';
import { Params } from './models/params';
import { environment } from '../../../environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private httpClient: HttpClient) {}

  getCharacters(params: Params) {
    let query = environment.baseUrl + 'characters' + environment.auth;
    if (params.orderBy) query = `${query}&orderBy=${params.orderBy}`;
    if (params.comics) query = `${query}&comics=${params.comics}`;
    if (params.events) query = `${query}&events=${params.events}`;
    if (params.limit) query = `${query}&limit=${params.limit}`;
    if (params.modifiedSince)
      query = `${query}&modifiedSince=${params.modifiedSince}`;
    if (params.name) query = `${query}&name=${params.name}`;
    if (params.offset) query = `${query}&offset=${params.offset}`;
    if (params.series) query = `${query}&series=${params.series}`;
    if (params.stories) query = `${query}&stories=${params.stories}`;
    if (params.nameStartsWith) query = `${query}&nameStartsWith=${params.nameStartsWith}`;
    return this.getCharactersPerPage(query);
  }

  getCharactersPerPage(query): Observable<Character[]> {
    return this.httpClient
      .get<Response>(query)
      .pipe( map((response: Response)=>response.data.results),
        retry(2), catchError(this.handleError));
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
