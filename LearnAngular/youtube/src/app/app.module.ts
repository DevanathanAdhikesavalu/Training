import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { SearchComponent } from './components/search/search.component';
import { AppRoutesModule } from './components/customrouting/app.routes';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HeaderDirective } from './directive/header.directive';
import { MyIfDirective } from './directive/my-if.directive';
import {HttpClientModule} from '@angular/common/http';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    SearchComponent,
    NotfoundComponent,
    HeaderDirective,
    MyIfDirective,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule, 
    FormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain:'dev-4fwxbvorxmmu0z77.us.auth0.com',
      clientId:'xq7ioFQkz7lcPxqqSNmZWOZ72XWwIk0U',
      authorizationParams:{
        redirect_uri:window.location.origin
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
