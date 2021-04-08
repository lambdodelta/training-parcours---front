import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FilterListComponent } from './filter-list/filter-list.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DetailsComponent } from './details/details.component';
import { EpisodeInfoComponent } from './information/episode-info/episode-info.component';
import { SummaryInfoComponent } from './information/summary-info/summary-info.component';
import { LayoutFormComponent } from './generic-form/layout-form/layout-form.component';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FilterListComponent,
    SideBarComponent,
    DetailsComponent,
    EpisodeInfoComponent,
    SummaryInfoComponent,
    LayoutFormComponent
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
