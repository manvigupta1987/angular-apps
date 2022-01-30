import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {HeaderComponent} from './header/header.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { RecipeModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared-module';
import { AuthModule } from './auth/auth-module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecipeModule,
    ShoppingListModule,
    SharedModule,
    AuthModule,
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
