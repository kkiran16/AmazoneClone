import React from 'react'
import styled from 'styled-components/macro'

export const StyledPageContent = styled.div`
  min-width: 1000px;
  max-width: none;
`
export const StyledHomeWrapper = styled.div`
  background: #eaeded;
  max-width: 1500px;
  margin: 0 auto;
`
export const StyledImageWrapper = styled.div`
  height: 600px;
`
export const StyledImageLink = styled.a<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>`
  display: inline-block;
`
export const StyledImageLink1 = styled.a``

export const StyledImage = styled.img`
  max-width: 100%;
`
