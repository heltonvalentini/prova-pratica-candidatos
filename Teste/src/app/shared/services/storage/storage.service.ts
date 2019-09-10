import { Injectable } from '@angular/core';
@Injectable()
export class StorageService {
  private host;
  constructor() {}

  setHost(host) {
    this.host = host;
  }
  getHost() {
    return this.host;
  }
}
