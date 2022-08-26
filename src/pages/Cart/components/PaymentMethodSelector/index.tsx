import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { FormContext } from '../../../../contexts/FormContext'
import { PaymentMethodContainer } from './styles'

export function PaymentMethodSelector() {
  const { activePaymentMethod, handleSelectPaymentMethod } =
    useContext(FormContext)
  return (
    <PaymentMethodContainer>
      <div className="header">
        <CurrencyDollar size={22} />
        <section>
          <h4>Pagamento</h4>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </section>
      </div>
      <div className="buttons">
        <button
          className={activePaymentMethod === 'credit' ? 'active' : ''}
          onClick={() => {
            handleSelectPaymentMethod('credit')
          }}
          type="button"
        >
          <CreditCard size={16} />
          Cartão de crédito
        </button>
        <button
          className={activePaymentMethod === 'debit' ? 'active' : ''}
          onClick={() => {
            handleSelectPaymentMethod('debit')
          }}
          type="button"
        >
          <Bank size={16} />
          Cartão de débito
        </button>
        <button
          className={activePaymentMethod === 'cash' ? 'active' : ''}
          onClick={() => {
            handleSelectPaymentMethod('cash')
          }}
          type="button"
        >
          <Money size={16} />
          Dinheiro
        </button>
      </div>
    </PaymentMethodContainer>
  )
}
