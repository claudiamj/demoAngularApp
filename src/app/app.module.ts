import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { LayoutModule } from './components/layout/layout.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { BookCardModule } from './components/books/book-card/book-card.module';
import { SearchModule } from './components/books/search/search.module';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './reducers';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchPageModule } from './components/layout/search-page/search-page.module';
import { EffectsModule, EffectsRootModule } from '@ngrx/effects';
import { BookEffects } from './effects/books.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    RouterModule,
    MaterialModule,
    LayoutModule,
    SidenavModule,
    BookCardModule,
    SearchModule,
    SearchPageModule,
    EffectsModule.forRoot(BookEffects),
    StoreModule.forRoot(ROOT_REDUCERS, {
      runtimeChecks: {
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
