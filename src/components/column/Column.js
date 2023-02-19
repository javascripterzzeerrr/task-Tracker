import styled from "styled-components";

const Coll = styled.div`
    background-color: rgb(219, 219, 219);
    border-radius: 10px;
    padding: 0 5px;

    grid-column: col ${props => props.number};
    grid-row: row ${props => props.rowsInit} / row ${props => props.rows + 1};
`;

const Column = (props) => {
    return (
        <Coll rowsInit={props.rowsInit} number={props.number} rows={props.rows}>{props.children}</Coll>
    )
}

export default Column;