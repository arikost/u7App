import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { NewOrderComponent } from './components/pages/new-order/new-order.component';
import { MyOrderComponent } from './components/pages/my-order/my-order.component';
import { HomeComponent } from './components/pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { TextInputComponent } from './components/partials/text-input/text-input.component';
import { TitleComponent } from './components/partials/title/title.component';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { InputValidationComponent } from './components/partials/input-validation/input-validation.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    NewOrderComponent,
    MyOrderComponent,
    HomeComponent,
    TextInputComponent,
    TitleComponent,
    InputContainerComponent,
    InputValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
