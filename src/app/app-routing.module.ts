import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IpComponent } from './ip/ip.component';
import { PredictComponent } from './predict/predict.component';

const routes: Routes = [
  {path: '', component: PredictComponent},
  {path: 'ip', component: IpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
