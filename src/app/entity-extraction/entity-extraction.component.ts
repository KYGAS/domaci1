import { Component } from '@angular/core';
import { HttpService } from '../http-service.service';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent {
  constructor(private httpService: HttpService) {}

  submitForm(){
    //this.httpService.getRequest()
  }
}
