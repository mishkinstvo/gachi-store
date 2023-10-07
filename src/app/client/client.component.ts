import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from '../clients.service';
import { Client } from '../app.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  providers: [ClientsService]
})
export class ClientComponent implements OnInit {

  client!: Client;

  constructor(private _route: ActivatedRoute, private clientsService: ClientsService) {
  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
       this.clientsService.find(params["id"]).subscribe(client => this.client = client);
    });
  }
}
