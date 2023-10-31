import { Component } from '@angular/core';
import { HttpService } from '../http-service.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent {

  path : string = 'li/v1';
  textInput : string = '';
  requestOutput : string  = '';

  constructor(private httpService: HttpService, private tokenService: TokenService) {}

  submitForm(){
    this.httpService.getRequest(this.path, `text=${this.textInput}&token=${this.tokenService.getToken()}`).subscribe(response=>{
      console.log(response);
      this.requestOutput = JSON.stringify(response);
    });
  }
}
