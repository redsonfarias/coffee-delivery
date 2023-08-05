import styled from 'styled-components'

interface LabelButtonProps {
  $fullWidth?: boolean
}

export const CheckoutContainer = styled.form`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;

  > :first-child {
    flex: 1;
  }
`

export const CheckoutMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  svg {
    color: ${(props) => props.theme.colors.baseText};
  }

  p {
    font-family: '${(props) => props.theme.fonts.secondary}';
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.baseSubtitle};
    letter-spacing: 0.1rem;
    max-width: 22rem;
    text-align: center;
    margin-top: 2rem;
  }
`

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.baseSubtitle};
  font-family: '${(props) => props.theme.fonts.secondary}';
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 1rem;
`

export const SummaryContainer = styled.div`
  width: 28rem;
  background: ${(props) => props.theme.colors.baseCard};
  border-radius: 6px 44px;
  padding: 2.5rem;
`

export const PurchaseValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }
`

export const PriceContainer = styled.div`
  :first-child {
    font-size: 0.875rem;
  }
`

export const PriceBoldContainer = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
`

export const LabelButtonContainer = styled.button<LabelButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  ${(props) => props.$fullWidth && 'width: 100%'};
  background: ${(props) => props.theme.colors.yellow};
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 160%;
  color: ${(props) => props.theme.colors.white};
  margin-top: 1.5rem;

  &:hover {
    background: ${(props) => props.theme.colors.yellowDark};
  }

  svg {
    color: ${(props) => props.theme.colors.white};
  }
`
