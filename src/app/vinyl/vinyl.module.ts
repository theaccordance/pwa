import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinylPageRoutingModule } from './vinyl-routing.module';

import { VinylPage } from './vinyl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinylPageRoutingModule
  ],
  declarations: [VinylPage]
})
export class VinylPageModule {}
