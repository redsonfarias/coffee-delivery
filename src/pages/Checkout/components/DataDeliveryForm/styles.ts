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
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const Error = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.red};
  margin-top: 1rem;
  text-align: center;
`
