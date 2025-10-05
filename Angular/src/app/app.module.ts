import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
 
import {
    DxAccordionModule
} from 'devextreme-angular';
 
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DxAccordionModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }