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
const ProductItem: React.FC<TItem> = ({ floatRight }: TItem) => {
  return (
    <StyledProductItemWrapper style={{ float: floatRight ? 'right' : 'none' }}>
      <StyledItemLink>
        <StyledLinkSection1>
          <StyledLinkImage
            alt="ACs"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg"
          />
        </StyledLinkSection1>
        <StyledLinkSection2>ACs</StyledLinkSection2>
      </StyledItemLink>
    </StyledProductItemWrapper>
  )
}

ProductItem.defaultProps = {
  floatRight: false
}

function ProductList(): React.ReactElement {
  return (
    <StyledProductListWrapper>
      <StyledListSection1>
        <ProductItem />
        <ProductItem floatRight />
      </StyledListSection1>
      <StyledListSection2>
        <ProductItem />
        <ProductItem floatRight />
      </StyledListSection2>
    </StyledProductListWrapper>
  )
}
const Product: React.FC = () => {
  return (
    <StyledProductWrapper>
      <StyledContainer>
        <StyledHeader>
          <h2>Top Picks for your Home</h2>
        </StyledHeader>
        <StyledBody>
          <ProductList />
        </StyledBody>
      </StyledContainer>
    </StyledProductWrapper>
  )
}

export default Product
