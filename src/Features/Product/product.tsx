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

interface TItem {
  floatRight?: boolean
}
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

function ProductList({ itemsList }: TProductList): React.ReactElement {
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
