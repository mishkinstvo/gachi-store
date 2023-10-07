import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotateBulochkaComponent } from './rotate-bulochka/rotate-bulochka.component';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {path: '', redirectTo: 'app/records', pathMatch: 'full'},
  {path: 'app/records', component: ClientsComponent},
  {path: 'app/records/:id', component: ClientComponent},
  {path: 'bulka', component: RotateBulochkaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
