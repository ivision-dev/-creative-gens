import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { LightboxModule } from 'ngx-lightbox';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './shared/components/search/search.component';
import { ModelGeneratorComponent } from './pages/model-generator/model-generator.component';
import { ImageGeneratorComponent } from './pages/image-generator/image-generator.component';
import { SliderComponent } from './pages/image-generator/components/slider/slider.component';
import { FAQComponent } from './pages/image-generator/components/faq/faq.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingComponent } from './shared/components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ModelGeneratorComponent,
    ImageGeneratorComponent,
    SliderComponent,
    FAQComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
