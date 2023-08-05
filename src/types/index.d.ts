export interface ICoffee {
  id: string
  name: string
  img: string
  tags: string[]
  description: string
  price: number
}

export interface ISelectedCoffee {
  id: string
  name: string
  img: string
  quantity: number
  price: number
}

export type PaymentMethodType = 'credit' | 'debit' | 'money'
