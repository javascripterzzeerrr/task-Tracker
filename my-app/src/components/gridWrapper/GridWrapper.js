import styled from "styled-components";

const GridWrapper = styled.div`
  margin: 20px 0 0 0;
  display: grid;
  grid-template-columns: minmax(60px, 90px) repeat(7, [col] minmax(80px, 2fr));
  grid-template-rows: repeat(${props => props.rows}, [row] minmax(40px, 1fr));
  gap: 3px;
  border-radius: 10px;
  background-color: rgb(236, 236, 236);
  padding: 10px;
`;

export default GridWrapper;