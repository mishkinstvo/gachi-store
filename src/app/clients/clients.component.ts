import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ClientsService } from '../clients.service';
import { Client } from '../app.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  providers: [ClientsService]
})
export class ClientsComponent implements AfterViewInit {
  pageIndex = 0;
  pageSize = 10;

  displayedColumns: string[] = ['name', 'address', 'debt', 'details'];
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
