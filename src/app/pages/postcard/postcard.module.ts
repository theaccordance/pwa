import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostcardPageRoutingModule } from './postcard-routing.module';

import { PostcardPage } from './postcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostcardPageRoutingModule
  ],
  declarations: [PostcardPage]
})
export class PostcardPageModule {}
