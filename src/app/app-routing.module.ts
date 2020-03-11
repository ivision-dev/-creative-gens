import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelGeneratorComponent } from './pages/model-generator/model-generator.component';
import { ImageGeneratorComponent } from './pages/image-generator/image-generator.component';

const routes: Routes = [
  {
    path: '',
    component: ModelGeneratorComponent
  },
  {
    path: 'imageGenerator',
    component: ImageGeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
