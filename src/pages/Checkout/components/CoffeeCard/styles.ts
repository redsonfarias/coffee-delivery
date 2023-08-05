import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.875rem;
  padding: 0.5rem 0.25rem;

  img {
    height: 4rem;
  }

  > :last-child {
    font-weight: 700;
  }
`

export const CoffeInfoContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const Name = styled.p`
  color: ${(props) => props.theme.colors.baseSubtitle};
`

export const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`

export const RemoveButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0 0.5rem;
  background: ${(props) => props.theme.colors.baseButton};
  border-radius: 6px;
  height: 2rem;
  text-transform: uppercase;
  font-size: 0.75rem;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  &:hover {
    background: ${(props) => props.theme.colors.baseHover};
    svg {
      color: ${(props) => props.theme.colors.purpleDark};
    }
  }
`

export const Divider = styled.section`
  height: 0.063rem;
  background: ${(props) => props.theme.colors.baseButton};
  margin: 1.5rem 0;
`
