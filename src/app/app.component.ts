import { Component } from '@angular/core';

export interface Client {
  id: number;
  name: string;
  address: string;
  debt: number;
}

const CLIENT_DATA: Client[] = [
  {id: 1, name: 'Van Darkholme', address: 'Dungeon', debt: 300},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'address', 'debt'];
  dataSource = CLIENT_DATA;
}
