import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface Client {
  id: number;
  name: string;
  address: string;
  debt: number;
}

@Injectable()
export class ClientsService {

  constructor(private httpClient: HttpClient) {}

  all():Observable<Client[]> {
    return this.httpClient.get<Client[]>('/assets/clients.json',  { observe: 'body' });
  }
}
