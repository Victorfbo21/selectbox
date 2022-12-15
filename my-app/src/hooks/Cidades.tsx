import { useEffect, useState } from "react";

export interface Regiao {
    id: number;
    sigla: string;
    nome: string;
}

export interface ICidades {
    id: number;
    sigla: string;
    nome: string;
    regiao: Regiao;
}


const useCidades = () => {
    const  [cidades , setCidades] = useState<ICidades[]>([])

    useEffect( () => {
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/municipios")
        .then((response)=> response.json())
        .then((data) => setCidades(data))
        }, []);

        return {
            cidades
        }
}

export default useCidades;