import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { DownPageComponent } from './down-page/down-page.component';
import { MyPageComponent } from './my-page/my-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    DownPageComponent,
    MyPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: MyPageComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ],
    {useHash: true} 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
