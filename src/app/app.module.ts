import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {CreateResumeComponent} from './auth/Create Resume/createresume.component';
import { ViewResumeComponent } from './auth/View Resume/View Resume.component';
import { FormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';

import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    CreateResumeComponent,
    ViewResumeComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '165489722577-h42igsl3snc5erek255uh80jf1qmga5t.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }