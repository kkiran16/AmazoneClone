import React from 'react'
import {
  StyledBody,
  StyledContainer,
  StyledHeader,
  StyledItemLink,
  StyledLinkImage,
  StyledLinkSection1,
  StyledLinkSection2,
  StyledListSection1,
  StyledListSection2,
  StyledProductItemWrapper,
  StyledProductListWrapper,
  StyledProductWrapper
} from './product.styles'

type TProductItem = {
  link: string
  displayName: string
}
type TProductList = {
  itemsList: Array<TProductItem>
}
type TProduct = {
  productCategoryName: string
  itemsList: Array<TProductItem>
}

// Ideally, passing generic props to React.FC is enough for the typescript to infer types on the function,
// But due to a bug with eslint-plugin-typescript(7.21.5) parser, it is necessary to provide types information on both React.FC & on props.
const ProductItem: React.FC<TProductItem> = ({
  link,
  displayName
}: TProductItem) => {
  return (
    <StyledProductItemWrapper>
      <StyledItemLink>
        <StyledLinkSection1>
          <StyledLinkImage alt={displayName} src={link} />
        </StyledLinkSection1>
        <StyledLinkSection2>{displayName}</StyledLinkSection2>
      </StyledItemLink>
    </StyledProductItemWrapper>
  )
}

// Alternate to arrow functions, we can write normal as below with typing.
function ProductList({ itemsList }: TProductList): React.ReactElement {
  // The below logic has to be refactored using some loops.
  return (
    <StyledProductListWrapper>
      <StyledListSection1>
        <ProductItem
          link={itemsList[0].link}
          displayName={itemsList[0].displayName}
        />
        <ProductItem
          link={itemsList[1].link}
          displayName={itemsList[1].displayName}
        />
      </StyledListSection1>
      <StyledListSection1>
        <ProductItem
          link={itemsList[2].link}
          displayName={itemsList[2].displayName}
        />
        <ProductItem
          link={itemsList[3].link}
          displayName={itemsList[3].displayName}
        />
      </StyledListSection1>
    </StyledProductListWrapper>
  )
}
const Product: React.FC<TProduct> = ({
  productCategoryName,
  itemsList
}: TProduct) => {
  return (
    <StyledProductWrapper>
      <StyledContainer>
        <StyledHeader>
          <h2>{productCategoryName}</h2>
        </StyledHeader>
        <StyledBody>
          <ProductList itemsList={itemsList} />
        </StyledBody>
      </StyledContainer>
    </StyledProductWrapper>
  )
}

export default Product
