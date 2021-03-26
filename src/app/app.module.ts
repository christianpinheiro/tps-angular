import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalcComponent } from './calc/calc.component';
import { TabuadaComponent } from './tabuada/tabuada.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { JurossimplesComponent } from './jurossimples/jurossimples.component';
import { JuroscompostosComponent } from './juroscompostos/juroscompostos.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'calc', component: CalcComponent},
    {path: 'tabuada', component: TabuadaComponent},
    {path: 'jurossimples', component: JurossimplesComponent},
    {path: 'juroscompostos', component: JuroscompostosComponent}
    ])    
  ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, CalcComponent, TabuadaComponent, HomeComponent, JurossimplesComponent, JuroscompostosComponent, PerfilComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
