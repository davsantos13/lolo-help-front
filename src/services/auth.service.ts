import { Injectable } from "@angular/core";
import { Credenciais } from "../domain/credenciais";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class AuthService {

    constructor(public http: HttpClient){

    }

    authenticate(credenciais: Credenciais){
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            credenciais, {
                observe: 'response',
                responseType: 'text'
            })
    }
}