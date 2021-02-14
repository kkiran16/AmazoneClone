import React from 'react'
import styled from 'styled-components/macro'

export const StyledPageContent = styled.div`
  background: #eaeded;
  min-width: 1000px;
  max-width: none;
`
export const StyledHomeWrapper = styled.div`
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
