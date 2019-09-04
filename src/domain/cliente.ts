import { Endereco } from "./endereco";

export interface Cliente{
    id: string;
    nome: string;
    email: string;
    idLegal: string;
    telefones: string[];
    endereco: Endereco;
}