import styled from 'styled-components'

export const NavBarContainer = styled.header`
  width: 100%;
  max-width: 72.5rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`
export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;
  background: ${(props) => props.theme.colors.purpleLight};
  color: ${(props) => props.theme.colors.purple};

  p {
    color: ${(props) => props.theme.colors.purpleDark};
    font-size: 0.875rem;
  }
`
export const ShoppingCartContainer = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.yellowLight};
  color: ${(props) => props.theme.colors.yellowDark};
  position: relative;
`
export const CounterContainer = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 100%;
  background: ${(props) => props.theme.colors.yellowDark};

  p {
    color: ${(props) => props.theme.colors.white};
    font-size: 0.75rem;
    font-weight: 700;
  }
`
