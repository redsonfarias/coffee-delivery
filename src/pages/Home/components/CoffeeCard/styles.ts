import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.875rem;
  padding: 1.25rem;
  background: ${(props) => props.theme.colors.baseCard};
  border-radius: 6px 36px;
  text-align: center;

  img {
    height: 7.5rem;
    margin-top: -2.5rem;
  }
`

export const Name = styled.p`
  font-family: '${(props) => props.theme.fonts.secondary}';
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.baseSubtitle};
`

export const TagListContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
`

export const TagContainer = styled.div`
  background: ${(props) => props.theme.colors.yellowLight};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;

  p {
    font-size: 0.625rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.yellowDark};
    text-transform: uppercase;
  }
`

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.baseLabel};
`

export const BuyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.875rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`

export const Coin = styled.p`
  font-size: 0.875rem;
  margin-top: 0.125rem;
`

export const ValueContainer = styled.div`
  :first-child {
    font-size: 0.875rem;
    margin-top: 0.125rem;
  }

  :last-child {
    font-family: '${(props) => props.theme.fonts.secondary}';
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const ShoppingCartContainer = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.purpleDark};
  color: ${(props) => props.theme.colors.white};
  margin-left: 0.25rem;

  &:hover {
    background: ${(props) => props.theme.colors.purple};
  }
`
