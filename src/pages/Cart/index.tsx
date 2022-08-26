import { CartPreview } from './components/CartPreview'

import { CheckoutContainer } from './styles'
import { FormProvider } from 'react-hook-form'
import { DeliveryForm } from './components/DeliveryForm'
import { useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'

export function Cart() {
  const { newDeliveryForm, handleCreateNewDelivery } = useContext(FormContext)
  const { handleSubmit } = newDeliveryForm

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewDelivery)}>
        <FormProvider {...newDeliveryForm}>
          <DeliveryForm />
        </FormProvider>
        <CartPreview />
      </form>
    </CheckoutContainer>
  )
}
