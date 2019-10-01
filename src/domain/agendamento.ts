import { Viagem } from "./viagem";

export interface Agendamento {
    id: string;
    descricao: string;
    inicio: Date;
    fim: Date;
    isViagem: boolean;
    viagem?: Viagem;
}