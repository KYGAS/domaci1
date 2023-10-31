import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private setToken: boolean = false;

  getSetToken(): boolean {
    return this.setToken;
  }

  setSetToken(value: boolean): void {
    this.setToken = value;
  }
}
