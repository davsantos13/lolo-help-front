import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class CepService {

    constructor(public http: HttpClient){

    }

    findCep(cep: any){
        return this.http.get(`${API_CONFIG.cepUrl}/${cep}/json`);
    }
}