import styled from 'styled-components'

export const DataDeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const RowContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`

export const Error = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.red};
  margin-top: 1rem;
  text-align: center;
`
