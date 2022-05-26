import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(public http: HttpClient) {

  }

  getVinyls() {
    const headers = new HttpHeaders()
        .append("Authorization", "Bearer 34959f1e7df53e3169c0ddb2f1c9246463301d5eef84daca4d4462ee831c7a396b4f5c72da8192762d26f88f16150f2f616d64650db891dc88d9ec10b4a0deb67f84b3a118d2ee4d72cbba1a2871ed16e49cb591fd48035e7dc2640fdf6106c348e6c8690b3ecad82afbb4f07df1b5b983092c4f868d9c30a9299e1d7fb8eb34");
    console.log("Fetch Vinyl Records");
    return this.http
        .get("https://api.mainwaring.dev/api/vinyls/", {headers});
  }
}
