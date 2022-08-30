import americano from '../assets/CoffeeTypes/americano.svg'
import arabe from '../assets/CoffeeTypes/arabe.svg'
import cafeComLeite from '../assets/CoffeeTypes/cafeComLeite.svg'
import cafeGelado from '../assets/CoffeeTypes/cafeGelado.svg'
import capuccino from '../assets/CoffeeTypes/capuccino.svg'
import chocolateQuente from '../assets/CoffeeTypes/chocolateQuente.svg'
import cubano from '../assets/CoffeeTypes/cubano.svg'
import expresso from '../assets/CoffeeTypes/expresso.svg'
import expressoCremoso from '../assets/CoffeeTypes/expressoCremoso.svg'
import havaiano from '../assets/CoffeeTypes/havaiano.svg'
import irlandes from '../assets/CoffeeTypes/irlandes.svg'
import latte from '../assets/CoffeeTypes/latte.svg'
import macchiato from '../assets/CoffeeTypes/macchiato.svg'
import mocaccino from '../assets/CoffeeTypes/mocaccino.svg'

export interface IProduct {
  id: string
  photo_url: string
  name: string
  description: string
  price: number
  tags: string[]
}

export const FakeDB: IProduct[] = [
  {
    id: 'e3e5df81-3b9c-4127-96ce-27172527e965',
    photo_url: expresso,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 19.9,
    tags: ['tradicional'],
  },
  {
    id: 'ad22bcec-550d-4e52-bebf-dad68a430aff',
    photo_url: americano,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 8.9,
    tags: ['tradicional'],
  },
  {
    id: '5acc5b45-fe07-4af1-a388-7444273e6b48',
    photo_url: expressoCremoso,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['tradicional'],
  },
  {
    id: 'c6931162-bb13-46b4-88ae-26f7ebe586e0',
    photo_url: cafeGelado,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['tradicional', 'gelado'],
  },
  {
    id: '3650875a-4579-4ab7-a3af-8abbc5770cda',
    photo_url: cafeComLeite,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: '5ba022bb-89b5-4ed8-b792-09f780e437ce',
    photo_url: latte,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 5.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 'fd7daf1f-cbe5-4a73-b29c-945c8f59cc47',
    photo_url: capuccino,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 2.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 'fcdc61c8-36d0-4ae0-ae91-cb25fd97ff16',
    photo_url: macchiato,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 19.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 'cb2ba39c-bf59-4943-887f-03ce5cbb5892',
    photo_url: mocaccino,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 'eb438474-c243-4926-a87a-44c215000e8e',
    photo_url: chocolateQuente,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 14.9,
    tags: ['especial', 'com leite'],
  },
  {
    id: 'd4a625f8-6d84-4e16-b85c-84f430caebbd',
    photo_url: cubano,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: ['especial', 'alcoólico', 'gelado'],
  },
  {
    id: '24c9b4db-0db0-49da-af89-27689187514e',
    photo_url: havaiano,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: ['especial'],
  },
  {
    id: '57b5ebee-a83f-4277-beca-19ea02241972',
    photo_url: arabe,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: ['especial'],
  },
  {
    id: '1ea7d36b-7e28-4a19-8174-521aa58d3de1',
    photo_url: irlandes,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: ['especial', 'alcoólico'],
  },
]
