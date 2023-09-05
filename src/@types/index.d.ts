export type ThemeUnion = 'light' | 'dark'

type Geo = { lat: string; lang: string }

type Address = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

type Company = { name: string; catchPhrase: string; bs: string }

export type User = {
  id: number
  name: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}
