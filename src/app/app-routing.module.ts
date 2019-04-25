import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
