import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FontSizeEditorComponent} from './Components/font-size-editor/font-size-editor.component';
import { PetComponent } from './Components/pet/pet.component';
import { CalculatorComponent } from './Components/calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './Components/user/user.component';
import { LayoutComponent } from './Components/core/layout/layout.component';
import { AsyncpipeComponent } from './Components/asyncpipe/asyncpipe.component';
import { TitleComponent } from './Components/title/title.component';
import { LikeComponent } from './Components/like/like.component';


@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetComponent,
    CalculatorComponent,
    UserComponent,
    LayoutComponent,
    AsyncpipeComponent,
    TitleComponent,
    LikeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
