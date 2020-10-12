export interface ViaCepAddress {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  unidade?: string;
  ibge?: string;
  gia?: string;
}

export interface IbgeState {
  id: number;
  nome: string;
  sigla: string;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  }
}

export interface City {
  id?: number;
  nome?: string;
  microrregiao?: {
    id?: number;
    nome?: string;
    mesorregiao?: {};
  }
}
