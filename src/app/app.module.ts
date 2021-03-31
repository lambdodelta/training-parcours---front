import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FilterListComponent } from './filter-list/filter-list.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DetailsComponent } from './details/details.component';
import { EpisodeInfoComponent } from './information/episode-info/episode-info.component';
import { SummaryInfoComponent } from './information/summary-info/summary-info.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterListComponent,
    SideBarComponent,
    DetailsComponent,
    EpisodeInfoComponent,
    SummaryInfoComponent,
    DynamicFormComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
