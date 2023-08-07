import { useFormContext } from 'react-hook-form'
import { FormTemplate } from './components/FormTemplate'
import { SelectButton } from '@/components/SelectButton'
import { Input } from '@/components/Input'
import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { PaymentMethodType } from '@/types'
import {
  DataDeliveryContainer,
  InputsContainer,
  RowContainer,
  ButtonsContainer,
  Error,
} from './styles'

export function DataDeliveryForm() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext()

  const paymentMethod = watch('paymentMethod')

  function isSelected(method: PaymentMethodType) {
    return method === paymentMethod
  }

  function getError(key: string) {
    return errors[key]?.message?.toString()
  }

  const paymantMethodError = getError('paymentMethod')

  return (
    <DataDeliveryContainer>
      <FormTemplate variant="address">
        <InputsContainer>
          <Input
            placeholder="CEP"
            maxWidth={12.5}
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
            {...register('cep')}
            error={getError('cep')}
          />

          <Input
            placeholder="Rua"
            {...register('street')}
            error={getError('street')}
          />
          <RowContainer>
            <Input
              placeholder="Número"
              maxWidth={12.5}
              {...register('number')}
              error={getError('number')}
            />
            <Input
              placeholder="Complemento"
              required={false}
              {...register('complement')}
            />
          </RowContainer>
          <RowContainer>
            <Input
              placeholder="Bairro"
              maxWidth={12.5}
              {...register('neighbourhood')}
              error={getError('neighbourhood')}
            />
            <Input
              placeholder="Cidade"
              {...register('city')}
              error={getError('city')}
            />
            <Input
              placeholder="UF"
              maxWidth={3.75}
              {...register('uf')}
              error={getError('uf')}
            />
          </RowContainer>
        </InputsContainer>
      </FormTemplate>

      <FormTemplate variant="payment">
        <>
          <ButtonsContainer>
            <SelectButton
              isSelected={isSelected('credit')}
              id="credit"
              {...register('paymentMethod')}
            >
              <CreditCard weight="regular" />
              cartão de crédito
            </SelectButton>
            <SelectButton
              isSelected={isSelected('debit')}
              id="debit"
              {...register('paymentMethod')}
            >
              <Bank weight="regular" />
              cartão de débito
            </SelectButton>
            <SelectButton
              isSelected={isSelected('money')}
              id="money"
              {...register('paymentMethod')}
            >
              <Money weight="regular" />
              dinheiro
            </SelectButton>
          </ButtonsContainer>
          {!!paymantMethodError && <Error>{paymantMethodError}</Error>}
        </>
      </FormTemplate>
    </DataDeliveryContainer>
  )
}
