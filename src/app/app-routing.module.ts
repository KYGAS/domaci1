import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import { LanguageDetectionComponent } from './language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { TextSimilarityComponent } from './text-similarity/text-similarity.component';

import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'entity-extraction', component: EntityExtractionComponent, canActivate: [AuthGuard]},
  { path: 'language-detection', component: LanguageDetectionComponent, canActivate: [AuthGuard] },
  { path: 'sentiment-analysis', component: SentimentAnalysisComponent, canActivate: [AuthGuard] },
  { path: 'text-similarity', component: TextSimilarityComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }