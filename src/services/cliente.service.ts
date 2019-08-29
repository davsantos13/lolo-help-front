import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Cliente } from "../domain/cliente";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class ClienteService{

    constructor(public http: HttpClient){

    }

    insert(cliente: Cliente){
        return this.http.post(`${API_CONFIG.baseUrl}/clientes`, cliente, 
        {
            observe : 'response',
            responseType : 'text'
        });
    }
}