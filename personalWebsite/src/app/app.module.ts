import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot([
      {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'blog',
        component: BlogComponent,
        pathMatch: 'full'
      }
    ])
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
