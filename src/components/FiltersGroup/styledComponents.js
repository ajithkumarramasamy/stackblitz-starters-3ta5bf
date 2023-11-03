import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const SearchInputContainer = styled.div`display: flex;
align-items: center;
background-color: #f1f5f9;
border-radius: 8px;
padding-left: 16px;
padding-top: 8px;
padding-bottom: 8px;
padding-right: 16px;`;

export const FiltersGroupContainer = styled.div`
  margin-top: 16px;
  @media only screen and (min-width: 768px) {
    width: 25%;
    max-width: 280px;
    min-width: 240px;
    margin-top: 48px;
    flex-shrink: 0;
  }
`;

export const SearchInput = styled.input`
background-color: #f1f5f9;
color: #0f172a;
font-family: 'Roboto';
font-size: 14px;
font-weight: 500;
border: none;
outline: none;
flex-grow: 1;
`;

export const SearchIcon = styled(BsSearch)`
color: #475569;
width: 20px;
height: 20px;
`;

export const CatogoryHeading = styled.h1`
  color: #12022f;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 700;
  margin-top: 24px;
  @media only screen and (min-width: 768px) {
    margin-top:32px;
  }
`;

export const CategoryList = styled.ul`
padding-left: 0
`;

export const CategoryItem = styled.li`
list-style-type: none;
  margin-top: 16px;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    margin-top:24px;
  }
`;

export const CategoryPara = styled.p`
padding-left:10px;
`;

export const RatingsList = styled.ul`
padding-left: 0px;
`;

export const RatingImage = styled.img`
max-width: 152px;
height: 20px
@media only screen and (min-width: 768px) {
  height: 24px;
}
`;

export const AndUp = styled.p`
color: #64748b;
  font-family: Roboto;
  font-size: 16px;
  margin-left: 10px;
  margin-bottom: 0;
  margin-top: 0;
`;
