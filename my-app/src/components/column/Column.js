import { useSelector } from "react-redux";

import {
    dashboardRows
} from "../../selectors/index";

import styled from "styled-components";

const Coll = styled.div`
    background-color: rgb(219, 219, 219);
    border-radius: 10px;
    padding: 5px;

    grid-column: col ${props => props.number};
    grid-row: row 2 / row ${props => props.rows + 1};
`;


const Column = (props) => {
    const rows = useSelector(dashboardRows);

    return (
        <Coll number={props.number} rows={rows}>{props.children}</Coll>
    )
}

export default Column;