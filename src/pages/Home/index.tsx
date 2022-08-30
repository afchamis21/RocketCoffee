import {
  HomeContainer,
  IntroContainer,
  IntroText,
  InfoContainer,
} from './styles'
import coffeeImage from '../../assets/coffee.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { ProductsList } from './components/ProductsList'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroText>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <InfoContainer>
            <span className="firstInfo">
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </span>
            <span className="secondInfo">
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </span>
            <span className="thirdInfo">
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </span>
            <span className="fourthInfo">
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </span>
          </InfoContainer>
        </IntroText>
        <img src={coffeeImage} alt="" />
      </IntroContainer>
      <ProductsList />
    </HomeContainer>
  )
}
