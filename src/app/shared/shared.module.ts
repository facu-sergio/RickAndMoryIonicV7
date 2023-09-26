import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ HttpClientModule } from '@angular/common/http'
import { RickMortyService } from '../services/rickMortySerivice';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [RickMortyService]
})
export class SharedModule { }
