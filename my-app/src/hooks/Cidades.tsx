import { useEffect, useState } from "react";



export interface ICidades {
    nome: string;
    codigo_ibge: string;
}





const useCidades = (uf:any) => {
    const  [cidades , setCidades] = useState<ICidades[]>([])

    const [carregando , setcarregando] = useState(false)
    
    useEffect( () => {
        if(!uf) return;
        setcarregando(true)
        fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`)
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