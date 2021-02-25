import styled from 'styled-components/macro'

/*
NTCB : Need To Come Back
*/
/* width: 290px; */
export const StyledProductWrapper = styled.div`
  display: block;
  height: 420px;
  max-width: 400px;
  min-height: 420px;
  flex: 1 0 290px;
  padding: 0 10px 0 10px;
  font-size: 13px !important;
  line-height: 19px !important;
  font-family: 'Amazon Ember', Arial, sans-serif;

  @media screen and (device-width: 360px) and (device-height: 640px) {
    height: 220px;
    min-height: 220px;
    max-width: 200px;
    flex: 1 0 190px;
  }
`
/* position: relative; NTCB */
export const StyledContainer = styled.div`
  background: #fff;
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 20px 0 15px 0;
  display: flex;
  flex-direction: column;
`

export const StyledHeader = styled.div`
  padding: 0 20px;
  margin-bottom: 10px;
`

export const StyledBody = styled.div`
  padding: 0 20px;
  display: flex;
  flex-grow: 1;
  margin-bottom: 44px;
  height: 275px;
`
export const StyledProductListWrapper = styled.div`
  & > div:nth-child(odd) {
    margin-bottom: 8px !important;
  }
`

export const StyledListSection1 = styled.div`
  overflow: hidden;
  height: 50%;

  & > div:nth-child(odd) {
    float: right;
  }
`

export const StyledListSection2 = styled.div`
  overflow: hidden;
  height: 50%;
`

// position: relative;
export const StyledProductItemWrapper = styled.div`
  display: inline-block;
  width: 47.5%;
  height: 100%;
  padding: 0 0 36px;
`
export const StyledItemLink = styled.a`
  height: 100%;
  text-decoration: none;
  color: #007185;
  cursor: pointer;
`
export const StyledLinkSection1 = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const StyledLinkImage = styled.img`
  max-height: 100%;
  height: 100%;
  max-width: none;
`

export const StyledLinkSection2 = styled.div`
  height: 36px;
  max-height: 38px;
  overflow: hidden;
  text-overflow: ellipsis;
`
