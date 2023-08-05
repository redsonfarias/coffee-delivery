import styled from 'styled-components'

export const ConfirmedOrderContainer = styled.form`
  margin-top: 5rem;

  > :first-child {
    font-family: '${(props) => props.theme.fonts.secondary}';
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors.yellowDark};
  }

  > :nth-child(2) {
    font-size: 1.25rem;
  }
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
  margin-top: 2rem;
`

export const OrderInfoContainer = styled.div`
  flex: 1;
  padding: 0.063rem;
  background: linear-gradient(to right, #dbac2c, #8047f8);
  border-radius: 6px 36px;

  > div {
    background: ${(props) => props.theme.colors.white};
    border-radius: 6px 36px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const UF = styled.span`
  text-transform: uppercase;
`
