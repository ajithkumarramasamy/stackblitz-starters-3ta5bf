import React from "react"
import {ProductItems,Thumbnail, Title, Brand, ProductDetails, Price, RatingContainer, Rating, Star} from "./styledComponents"

const ProductItem = (props) => {
  const {eachData} = props
  const {title, brand, imageUrl, rating, price} = eachData
  return(
    <ProductItems>
      <Thumbnail src={imageUrl} alt="product" />
      <Title>{title}</Title>
      <Brand>by {brand}</Brand>
      <ProductDetails>
        <Price>Rs {price}/-</Price>
        <RatingContainer>
          <Rating>{rating}</Rating>
          <Star
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </RatingContainer>
      </ProductDetails>
    </ProductItems>
  )
}

export default ProductItem