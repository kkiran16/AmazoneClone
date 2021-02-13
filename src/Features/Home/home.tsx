import React from 'react'
import {
  StyledHomeWrapper,
  StyledImage,
  StyledImageLink,
  StyledImageLink1,
  StyledPageContent,
  StyledImageWrapper
} from './home-styles'

const Home: React.FC = () => {
  return (
    <StyledPageContent>
      <StyledHomeWrapper>
        <StyledImageWrapper>
          <StyledImageLink href="https://www.amazon.in/dp/B08K92WLCV?pf_rd_r=EYK3GMPS070NM1SBRHK1&pf_rd_p=3e690865-aa61-4538-b18e-fecc689d1374">
            <StyledImage
              alt="Alexa Smart Home"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/FTV-GW/Cutter_Brownie_Desktop_1500x600._CB661129325_.jpg"
            />
          </StyledImageLink>
        </StyledImageWrapper>
      </StyledHomeWrapper>
    </StyledPageContent>
  )
}

export default Home
