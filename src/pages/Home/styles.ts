import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  margin-top: 2rem;
`

export const Title = styled.p`
  font-family: '${(props) => props.theme.fonts.secondary}';
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.baseSubtitle};
`

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
  margin-top: 3rem;
`
