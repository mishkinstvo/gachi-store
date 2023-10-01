import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotateBulochkaComponent } from './rotate-bulochka/rotate-bulochka.component';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {path: '', component: ClientsComponent},
  {path: 'bulka', component: RotateBulochkaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
