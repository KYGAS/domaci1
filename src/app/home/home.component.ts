import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  token: string = ''; // Explicitly setting the type as string
  setToken: boolean = false;

  constructor(private tokenService: TokenService) {}

  ngOnInit() {
    // Retrieve token from session storage on component initialization
    const savedToken = sessionStorage.getItem('userToken');
    if (savedToken) {
      this.token = savedToken;
      this.tokenService.setSetToken(this.token != '');
      this.setToken = this.tokenService.getSetToken();
    }
  }

  submitToken() {
    // Save the token to the session storage
    sessionStorage.setItem('userToken', this.token);
    this.tokenService.setSetToken(this.token != '');
    this.setToken = this.tokenService.getSetToken();
  }
}
