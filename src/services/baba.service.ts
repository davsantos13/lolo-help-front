import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class BabaService {

    constructor(
        public http: HttpClient
    ){
    }

    insert(baba: any){
        return this.http.post(`${API_CONFIG.baseUrl}/babas`, baba,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    findById(id: number){
        return this.http.get(`${API_CONFIG.baseUrl}/babas/${id}`);
    }
}