import american from './assets/American.svg'
import arabic from './assets/Arabic.svg'
import capuccino from './assets/Capuccino.svg'
import cuban from './assets/Cuban.svg'
import coffeeWithMilk from './assets/CoffeeWithMilk.svg'
import creamy from './assets/Creamy.svg'
import traditional from './assets/Traditional.svg'
import havaiian from './assets/Hawaiian.svg'
import hotChocolate from './assets/HotChocolate.svg'
import iced from './assets/Iced.svg'
import irish from './assets/Irish.svg'
import latte from './assets/Latte.svg'
import macchiato from './assets/Macchiato.svg'
import mochaccino from './assets/Mochaccino.svg'

export const COFFEES = [
  {
    id: '01',
    name: 'Expresso Tradicional',
    img: traditional,
    tags: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: '02',
    name: 'Expresso Americano',
    img: american,
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: '03',
    name: 'Expresso Cremoso',
    img: creamy,
    tags: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: '04',
    name: 'Expresso Gelado',
    img: iced,
    tags: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: '05',
    name: 'Café com leite',
    img: coffeeWithMilk,
    tags: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: '06',
    name: 'Latte',
    img: latte,
    tags: ['tradicional', 'com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: '07',
    name: 'Capuccino',
    img: capuccino,
    tags: ['tradicional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: '08',
    name: 'Macchiato',
    img: macchiato,
    tags: ['tradicional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: '09',
    name: 'Mochaccino',
    img: mochaccino,
    tags: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    img: hotChocolate,
    tags: ['especial', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: '11',
    name: 'Cubano',
    img: cuban,
    tags: ['especial', 'alcoólico', 'gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: '12',
    name: 'Havaiano',
    img: havaiian,
    tags: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: '13',
    name: 'Árabe',
    img: arabic,
    tags: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: '14',
    name: 'Irlandês',
    img: irish,
    tags: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]

export const DELIVERY_PRICE = 3.5

const COFFEE_SHOP_LATITUDE = -27.21084911057576
const COFFEE_SHOP_LONGITUDE = -49.64396488873295

export const COFFEE_SHOP_LOCATION = `https://www.google.com/maps?q=${COFFEE_SHOP_LATITUDE},${COFFEE_SHOP_LONGITUDE}`
