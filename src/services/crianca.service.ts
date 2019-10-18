import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";


@Injectable()
export class CriancaService {


    constructor(
        public http: HttpClient
    ) {

    }

    insert(crianca: any, id: any) {
        return this.http.post(`${API_CONFIG.baseUrl}/criancas/${id}`, crianca,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    findById(id: number) {
        return this.http.get(`${API_CONFIG.baseUrl}/criancas/identificador?value=${id}`);
    }

    findByCliente(id: any) {
        return this.http.get(`${API_CONFIG.baseUrl}/criancas/id?value=${id}`);
    }




}