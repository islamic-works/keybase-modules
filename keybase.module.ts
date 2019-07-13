import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { KeybaseRoutingModule } from './keybase-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common'; 


@NgModule({
  declarations: [],
  imports: [
    KeybaseRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: []
})
export class KeybaseModule { }
