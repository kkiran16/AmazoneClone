import React from 'react'
import styled from 'styled-components/macro'

export const StyledPageContent = styled.div`
  background: #eaeded;
  min-width: 1000px;
  max-width: none;
`
export const StyledBannerWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`
export const StyledImageWrapper = styled.div`
  height: 300px;
  max-height: 230px;
`
// Though for below styled component generic is being applied, I don't see the actual benefit out of it.
// Need to review later if it's really necessary.
export const StyledImageLink = styled.a<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>`
  display: inline-block;
`
export const StyledImageLink1 = styled.a``

export const StyledImage = styled.img`
  max-width: 100%;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`
export const StyledGridLayout = styled.div`
  padding: 0 10px;
  position: relative;
  margin-bottom: 0 !important;
`
export const StyledGridCardLayout = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 1480px;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px 0;

  @media (max-width: 1239px) {
    max-width: 1219px;
    min-width: 919px;
  }
`
