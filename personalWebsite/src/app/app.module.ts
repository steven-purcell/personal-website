import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowResumeComponent } from './show-resume/show-resume.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ShowResumeComponent,
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
        component: HomeComponent
      },
      {
        path: 'resume',
        component: ShowResumeComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
