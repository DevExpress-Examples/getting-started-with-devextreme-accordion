import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxAccordionModule } from 'devextreme-angular/ui/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DxAccordionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
