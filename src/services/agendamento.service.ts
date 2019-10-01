import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { Agendamento } from "../domain/agendamento";

@Injectable()
export class AgendamentoService {

    constructor(public http: HttpClient) {

    }

    insert(agendamento: Agendamento) {
        this.http.post(`${API_CONFIG.baseUrl}/agendamentos`, agendamento,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    findAll() {
        return this.http.get(`${API_CONFIG.baseUrl}/agendamentos`);
    }
}