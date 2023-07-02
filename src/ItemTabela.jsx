function ItemTabela(props) {
    return (
        <tr>
            <td><img src={props.filme.foto} alt={props.titulo} width={200} height={400} /></td>
            <td className="me-2">
                <h4>Titulo: {props.filme.titulo}</h4>
                <h4>Genero: {props.filme.genero}</h4>
                <h4>Duração: {props.filme.duracao} min</h4>
                <button className="btn btn-success" onClick={props.seleciona}>Selecionar</button>
                <button className="btn btn-primary" onClick={props.alerta}>Ver sinopse</button>
            </td>
        </tr>
    )
}

export default ItemTabela