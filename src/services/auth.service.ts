import { Injectable } from "@angular/core";
import { Credenciais } from "../domain/credenciais";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../domain/local_user";
import { StorageService } from "./storage.service";
import { JwtHelper } from "angular2-jwt";
import { ClienteService } from "./cliente.service";
import { Cliente } from "../domain/cliente";

@Injectable()
export class AuthService {

    cliente: Cliente;
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(
        public http: HttpClient,
        public storage: StorageService,
        public clienteService: ClienteService){

    }

    authenticate(credenciais: Credenciais){
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            credenciais, {
                observe: 'response',
                responseType: 'text'
            })
    }

    successfulLogin(authorizationValue: string){
        let tok = authorizationValue.substring(7);
        let user: LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
    }

    logout(){
        this.storage.setLocalUser(null);
    }
}