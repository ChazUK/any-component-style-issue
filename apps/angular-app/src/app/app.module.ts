import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '@any-component-style-issue/ui';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  imports: [BrowserModule, UiModule],
  providers: [],
  declarations: [AppComponent, NxWelcomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
