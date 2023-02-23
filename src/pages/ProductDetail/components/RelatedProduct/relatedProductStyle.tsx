import styled from 'styled-components'

export const RelatedWrapper = styled.div`
  display: flex;
  margin-top: 5rem;
  flex-direction: column;
  gap: 3rem;
`

export const StyleH1 = styled.h1`
  color: #1b5a7d;
  font-size: 1.75rem;
`

export const ListProduct = styled.div`
  /* height: 20rem; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
`
