import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, [col] minmax(80px, 2fr));
  grid-template-rows: repeat(${props => props.rows * 2}, [row] 30px);
  gap: 3px;
  background-color: none;
`;

export default Grid;