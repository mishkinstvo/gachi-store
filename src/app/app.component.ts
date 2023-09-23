import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Client {
  id: number;
  name: string;
  address: string;
  debt: number;
}

const CLIENT_DATA: Client[] = [
  {id: 1, name: 'Van Darkholme', address: 'Dungeon', debt: 300},
  {id: 2, name: 'Steve Rambo', address: 'Catalina', debt: 69},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  pageIndex = 0;
  pageSize = 1;

  displayedColumns: string[] = ['id', 'name', 'address', 'debt'];
  dataSource = new MatTableDataSource<Client>(CLIENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
