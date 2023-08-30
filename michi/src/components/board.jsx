import Square from "./square";
const Board = ({board, updateBoard}) => {
    return (
        <section className='game'>
            {
                board.map((el, index) => {
                    return (
                        <Square key= {index} index={index} updateBoard= {updateBoard}>
                            {el}
                        </Square>   
                    )
                })
            }
        </section>

    )
}
export default Board;