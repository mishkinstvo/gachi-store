import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ClientsService } from './clients.service';

export interface Client {
  id: number;
  name: string;
  address: string;
  debt: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ClientsService]
})
export class AppComponent implements AfterViewInit {
  pageIndex = 0;
  pageSize = 10;

  displayedColumns: string[] = ['name', 'address', 'debt'];
  dataSource!: MatTableDataSource<Client>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private clientService: ClientsService) {}

  ngAfterViewInit(): void {
    this.clientService.all().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Client>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
