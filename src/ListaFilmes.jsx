import { useState, useEffect } from "react"
import { dados } from "./filmes"
import ItemTabela from "./ItemTabela"

function ListaFilmes() {
    const [filmes, setFilmes] = useState([])
    const [selecionados, setSelecionados] = useState([])
    const [mostra, setMostra] = useState("")


    useEffect(() => {
        setFilmes(dados)
    }, [])

    function selecionaFilme(titulo, duracao) {
        let lista
        lista = [...selecionados]
        lista.push({ titulo, duracao })
        setSelecionados(lista)

    }
    const duracaoTotalMinutos = selecionados.reduce((total, filme) => total + filme.duracao, 0);
    const duracaoTotalHoras = Math.floor(duracaoTotalMinutos / 60);
    const duracaoTotalMinutosRestantes = duracaoTotalMinutos % 60;


    function mostrarSinopse(sinopse) {
        alert (sinopse)
    }
    


    const ListaDeFilmes = filmes.map(filme => (
        <ItemTabela key={filme.id} filme={filme} selecionados={selecionados}
            seleciona={() => selecionaFilme(filme.titulo, filme.duracao)}  alerta={() => mostrarSinopse(filme.sinopse)} />
    ))

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    <h2>Selecionados: {selecionados.map(filme => `${filme.titulo} ${filme.duracao}min`).join(', ')}</h2>

                </div>
                <div className="col-sm-3">
                    <h2>Tempo Total: {duracaoTotalHoras}h {duracaoTotalMinutosRestantes}min </h2>
                </div>
            </div>
            <table className="table mt-2">
                <thead>
                    <tr>
                        <th>Imagem do filme:</th>
                        <th>Titulo, genero e duração:</th>
                    </tr>
                </thead>
            </table>
            <tbody>{ListaDeFilmes}</tbody>
        </div>
    )
}

export default ListaFilmes