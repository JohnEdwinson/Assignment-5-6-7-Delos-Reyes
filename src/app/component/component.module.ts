import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentPageRoutingModule } from './component-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentPage } from './component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentPageRoutingModule
  ],
  declarations: [ComponentPage],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentPageModule {}
