import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { FilterListComponent } from './filter-list/filter-list.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { EventEmitterService } from './service/event-emitter.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterListComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
