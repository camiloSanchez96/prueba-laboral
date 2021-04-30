import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbLayoutModule,
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbUserModule,
  NbIconModule,
  NbToggleModule,
  NbActionsModule,
  NbSpinnerModule,
  NbDialogModule,
  NbMenuModule,
  NbToastrModule,
  NbThemeModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';




@NgModule({
  exports: [
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbUserModule,
    NbIconModule,
    NbToggleModule,
    NbActionsModule,
    NbSpinnerModule,
    NbDialogModule,
    NbMenuModule,
    NbToastrModule,
    NbThemeModule,
    NbSelectModule,
    NbListModule,
  ],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbDialogModule.forRoot(),
    NbCardModule,
    NbButtonModule,
    NbUserModule,
    NbInputModule,
    NbIconModule,
    NbToggleModule,
    NbActionsModule,
    NbSpinnerModule,
    NbToastrModule.forRoot(),
    NbDialogModule.forChild(),
    NbSelectModule,
    NbListModule,
  ],
   declarations: [
  ],
})

export class NebularModule{

}