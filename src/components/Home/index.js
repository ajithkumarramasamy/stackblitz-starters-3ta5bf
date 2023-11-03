import React, { Component } from 'react';
import product from '../product';
import Header from '../Header';
import ProductItem from '../ProductItem';
import { ProductsList, AllProductSection } from './styledComponents';
import FiltersGroup from '../FiltersGroup';
import Pagination from '../Pagination';

const categoryOptions = [
  {
    name: '1 to 499',
    categoryId_1: 0,
    categoryId_2: 499,
  },
  {
    name: '500 to 999',
    categoryId_1: 500,
    categoryId_2: 1000,
  },
  {
    name: '1000 to 2000',
    categoryId_1: 1000,
    categoryId_2: 1999,
  },
  {
    name: 'above 2000',
    categoryId_1: 2000,
    categoryId_2: 1000000,
  },
];

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
];
class Home extends Component {
  state = {
    data: product,
    currentPage: 1,
    postPerPage: 6,
    searchInput: '',
    activeRatingId: '',
  };

  changeRating = (activeRatingId) => {
    const { data } = this.state;
    let final = product.filter((each) => each.rating >= activeRatingId);
    this.setState({ data: final });
  };

  changeCategory = (activeCategoryId_1, activeCategoryId_2) => {
    const { data } = this.state;
    console.log(activeCategoryId_1);
    console.log(activeCategoryId_2);
    let final = product.filter(
      (each) =>
        each.price >= activeCategoryId_1 && each.price <= activeCategoryId_2
    );
    this.setState({ data: final });
  };

  enterSearchInput = () => {
    const {searchInput} = this.state
    let final = product.filter(each => each.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
    this.setState({data: final})
  };

  changeSearchInput = (searchInput) => {
    this.setState({ searchInput });
  };

  clearFilters = () => {
    this.setState({data: product})
  }

  setCurrentPage = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { data, currentPage, postPerPage, searchInput, activeRatingId } =
      this.state;
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPost = data.slice(firstPostIndex, lastPostIndex);
    return (
      <>
        <Header />
        <AllProductSection>
          <FiltersGroup
            searchInput={searchInput}
            categoryOptions={categoryOptions}
            ratingsList={ratingsList}
            changeSearchInput={this.changeSearchInput}
            enterSearchInput={this.enterSearchInput}
            activeRatingId={activeRatingId}
            changeCategory={this.changeCategory}
            changeRating={this.changeRating}
            clearFilters={this.clearFilters}
          />
          <ProductsList>
            {currentPost.map((each) => (
              <ProductItem eachData={each} />
            ))}
          </ProductsList>
        </AllProductSection>
        <Pagination
          totalPosts={data.length}
          postPerPage={postPerPage}
          setCurrentPage={this.setCurrentPage}
          currentPage={currentPage}
        />
      </>
    );
  }
}

export default Home;
