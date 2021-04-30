import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NebularModule } from './nebular/nebular.module';
import { ContainerGeneralComponent } from './container-general/container-general.component';
import { MainComponent } from './container-general/main/main.component';
import { LogueoComponent } from './logueo/logueo.component';
import { NbSidebarService, NbMenuService, NbAlertModule} from '@nebular/theme'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainAdminComponent } from './container-general/main-admin/main-admin.component';
import { HeaderMainComponent } from './container-general/header-main/header-main.component';
import { ListUsuariosComponent } from './container-general/main-admin/list-usuarios/list-usuarios.component';
import { DialogEditComponent } from './container-general/main-admin/dialog-edit/dialog-edit.component';
import { GraficaVentasComponent } from './container-general/main-admin/grafica-ventas/grafica-ventas.component';
import { HeaderComponent } from './container-general/header/header.component';
import { PipePipe } from './services/pipe.pipe';
import { TarjeasEstadosComponent } from './container-general/main/tarjeas-estados/tarjeas-estados.component';

@NgModule({
  declarations: [		
    AppComponent,
      ContainerGeneralComponent,
      MainComponent,
      LogueoComponent,
      MainAdminComponent,
      HeaderMainComponent,
      ListUsuariosComponent,
      DialogEditComponent,
      GraficaVentasComponent,
      HeaderComponent,
      PipePipe,
      TarjeasEstadosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NebularModule,
    NbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    NbEvaIconsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [NbSidebarService,NbMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
