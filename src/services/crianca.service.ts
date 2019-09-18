import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class CriancaService {

    constructor(
        public http: HttpClient
    ){

    }

    insert(crianca: any){
        return this.http.post(`${API_CONFIG.baseUrl}/criancas`, crianca,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    findById(id: number){
        return this.http.get(`${API_CONFIG.baseUrl}/criancas/${id}`);
    }


}