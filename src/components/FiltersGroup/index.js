import React from 'react';

import {
  SearchInputContainer,
  FiltersGroupContainer,
  SearchInput,
  SearchIcon,
  CatogoryHeading,
  CategoryList,
  CategoryItem,
  CategoryPara,
  RatingsList,
  RatingImage,
  AndUp,
} from './styledComponents';

const FiltersGroup = (props) => {
  const renderRatingsFiltersList = () => {
    const { ratingsList } = props;

    return ratingsList.map((rating) => {
      const { changeRating, activeRatingId } = props;
      const onClickRatingItem = () => changeRating(rating.ratingId);

      return (
        <CategoryItem key={rating.ratingId} onClick={onClickRatingItem}>
          <RatingImage
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            RatingImage
          />
          <AndUp>& up</AndUp>
        </CategoryItem>
      );
    });
  };

  const renderRatingsFilters = () => (
    <div>
      <CatogoryHeading>Rating</CatogoryHeading>
      <RatingsList>{renderRatingsFiltersList()}</RatingsList>
    </div>
  );

  const renderCategoriesList = () => {
    const { categoryOptions } = props;

    return categoryOptions.map((category) => {
      const { changeCategory } = props;
      const onClickCategoryItem = () =>
        changeCategory(category.categoryId_1, category.categoryId_2);
      return (
        <CategoryItem key={category.categoryId_1} onClick={onClickCategoryItem}>
          <CategoryPara>{category.name}</CategoryPara>
        </CategoryItem>
      );
    });
  };

  const renderProductCategories = () => (
    <>
      <CatogoryHeading>Price</CatogoryHeading>
      <CategoryList>{renderCategoriesList()}</CategoryList>
    </>
  );

  const onEnterSearchInput = (event) => {
    const { enterSearchInput } = props;
    if (event.key === 'Enter') {
      enterSearchInput();
    }
  };

  const onChangeSearchInput = (event) => {
    const { changeSearchInput } = props;
    changeSearchInput(event.target.value);
  };

  const renderSearchInput = () => {
    const { searchInput } = props;
    return (
      <SearchInputContainer>
        <SearchInput
          value={searchInput}
          type="search"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <SearchIcon />
      </SearchInputContainer>
    );
  };

  const { clearFilters } = props;

  return (
    <FiltersGroupContainer>
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingsFilters()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </FiltersGroupContainer>
  );
};

export default FiltersGroup;
