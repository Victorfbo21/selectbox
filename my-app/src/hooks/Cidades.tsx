import { useEffect, useState } from "react";



export interface Regiao {
    id: number;
    sigla: string;
    nome: string;
}

export interface UF {
    id: number;
    sigla: string;
    nome: string;
    regiao: Regiao;
}

export interface Mesorregiao {
    id: number;
    nome: string;
    UF: UF;
}

export interface Microrregiao {
    id: number;
    nome: string;
    mesorregiao: Mesorregiao;
}

export interface Regiao2 {
    id: number;
    sigla: string;
    nome: string;
}

export interface UF2 {
    id: number;
    sigla: string;
    nome: string;
    regiao: Regiao2;
}

export interface RegiaoIntermediaria {
    id: number;
    nome: string;
    UF: UF2;
}

export interface RegiaoImediata {
    id: number;
    nome: string;
   // regiao-intermediaria: RegiaoIntermediaria;
}

export interface ICidades {
    id: number;
    nome: string;
    microrregiao: Microrregiao;
   // regiao-imediata: RegiaoImediata;
}




const useCidades = (uf :any ) => {
    const  [cidades , setCidades] = useState<ICidades[]>([])

    const [carregando , setcarregando] = useState(false)
    
    useEffect( () => {
        if(!uf) return;
        setcarregando(true)
            fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`)
        .then((response)=> response.json())
        .then((data) => setCidades(data))
        .then(() => setcarregando(false))
        }, [uf]);

        return {
            cidades,
            carregando
        }
}

export default useCidades;