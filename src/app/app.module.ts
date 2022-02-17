import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';

import { DataService } from './data.service';
import { PredictComponent } from './predict/predict.component';
import { PredictAgeComponent } from './predict-age/predict-age.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PredictGenderComponent } from './predict-gender/predict-gender.component';
import { PredictNationalityComponent } from './predict-nationality/predict-nationality.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IpComponent } from './ip/ip.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UserComponent,
    PredictComponent,
    PredictAgeComponent,
    NavbarComponent,
    FooterComponent,
    PredictGenderComponent,
    PredictNationalityComponent,
    IpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
