import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormContext } from '../../contexts/FormContext'
import {
  AddressInfo,
  DeliveryInfoContainer,
  DeliveryPrediction,
  PaymentInfo,
  SuccessWindowContainer,
} from './styles'

import illustrationPath from '../../assets/Illustration.svg'

export function Success() {
  const { resultData } = useContext(FormContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!resultData) {
      navigate('/cart')
    }
  })

  const paymentTypeNames = {
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
    cash: 'Dinheiro',
  }

  return (
    <SuccessWindowContainer>
      <div className="title">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <main>
        <DeliveryInfoContainer>
          <AddressInfo>
            <span>
              <MapPin size={16} weight="fill" />
            </span>
            <p>
              Entrega em{' '}
              <b>{`${resultData?.formData.street}, ${resultData?.formData.number}`}</b>
              <br />
              {`${resultData?.formData.neighborhood} - ${resultData?.formData.city}, ${resultData?.formData.state}`}
            </p>
          </AddressInfo>
          <DeliveryPrediction>
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <p>
              Previsão de entrega <br /> <b>20 min - 30 min</b>
            </p>
          </DeliveryPrediction>
          <PaymentInfo>
            <span>
              <CurrencyDollar size={16} weight="fill" />
            </span>
            <p>
              Pagamento na entrega <br />{' '}
              <b>{paymentTypeNames[resultData?.paymentMethod!]} </b>
            </p>
          </PaymentInfo>
        </DeliveryInfoContainer>
        <img src={illustrationPath} alt="Sua entrega está a caminho" />
      </main>
    </SuccessWindowContainer>
  )
}
