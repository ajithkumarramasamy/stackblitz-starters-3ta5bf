import styled from 'styled-components';

export const ProductsList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content:center;
padding-left: 0;
`;

export const AllProductSection = styled.div`
display: flex;
flex-direction: column;
@media only screen and (min-width: 768px) {
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 100px;
}
`;
