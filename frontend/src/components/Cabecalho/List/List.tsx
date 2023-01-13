import { Button } from "@mui/material"
import { Professor } from "../../../@types/professor"
import { FormatadorService } from "../../../services/FormatadorService"
import { Descricao, Foto, Informacoes, ItemLista, ListaVazia, ListaStyled, Nome, Valor } from "./List.style"

interface ListProps {
    professores: Professor[],
    onSelect: (professor: Professor) => void,
}

const List = (props: ListProps) => {
        return (
        <div>
            {props.professores.length > 0 ? (
                <ListaStyled>
                {props.professores.map(professor => (
                    <ItemLista key={professor.id}>
                    <Foto src={professor.foto}></Foto>
                    <Informacoes>
                        <Nome>{professor.nome}</Nome>
                        <Valor>{FormatadorService.valorMonetario(professor.valor_hora)}</Valor>
                        <Descricao>{FormatadorService.limitarTexto(professor.descricao, 200)}</Descricao>
                        <Button onClick={ () => props.onSelect(professor)} sx={{width: '70%'}}>Marcar Aula com {professor.nome}</Button>
                    </Informacoes>
                </ItemLista>
                ))}    
            </ListaStyled> 
            ) : (
                <ListaVazia>Nenhum professor encontrado</ListaVazia>
            )}
        </div>
    )
}

export default List