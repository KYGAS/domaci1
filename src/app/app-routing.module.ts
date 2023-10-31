import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import { LanguageDetectionComponent } from './language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { TextSimilarityComponent } from './text-similarity/text-similarity.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entity-extraction', component: EntityExtractionComponent },
  { path: 'language-detection', component: LanguageDetectionComponent },
  { path: 'sentiment-analysis', component: SentimentAnalysisComponent },
  { path: 'text-similarity', component: TextSimilarityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }