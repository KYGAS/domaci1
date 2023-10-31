import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private isSetToken: boolean = false;
  private Token: string = '';

  getSetToken(): boolean {
    return this.isSetToken;
  }

  setSetToken(value: boolean): void {
    this.isSetToken = value;
  }

  getToken(): string{
    return this.Token;
  }
  
  setToken(token: string): void{
    this.Token = token;
  }
}
