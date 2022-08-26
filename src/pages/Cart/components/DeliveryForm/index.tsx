import { useFormContext } from 'react-hook-form'
import { useContext } from 'react'
import {
  CityInput,
  ComplementInput,
  FormContainer,
  FormFourthLine,
  FormThirdLine,
  FormTitle,
  NeighborhoodInput,
  NumberInput,
  StateInput,
  StreetInput,
  ZipCodeInput,
} from './styles'
import { MapPinLine } from 'phosphor-react'
import { PaymentMethodSelector } from '../PaymentMethodSelector'
import { FormContext } from '../../../../contexts/FormContext'

const states = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
]

export function DeliveryForm() {
  const { register } = useFormContext()

  const { newDeliveryForm } = useContext(FormContext)

  const {
    formState: { errors: formErrors },
  } = newDeliveryForm

  return (
    <div>
      <h3>Complete seu pedido</h3>
      <FormContainer>
        <FormTitle>
          <MapPinLine size={22} />
          <div>
            <h4>Endereço de Entrega</h4>
            <p>Informe o endereço onde deseja receber o seu pedido</p>
          </div>
        </FormTitle>
        <ZipCodeInput
          type="text"
          placeholder="CEP"
          {...register('zipCode')}
          className={formErrors.zipCode && 'invalidInput'}
        />
        <StreetInput
          type="text"
          placeholder="Rua"
          {...register('street')}
          className={formErrors.street && 'invalidInput'}
        />
        <FormThirdLine>
          <NumberInput
            type="text"
            placeholder="Número"
            {...register('number')}
            className={formErrors.number && 'invalidInput'}
          />
          <ComplementInput
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
          <span>Opcional</span>
        </FormThirdLine>
        <FormFourthLine>
          <NeighborhoodInput
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
            className={formErrors.neighborhood && 'invalidInput'}
          />
          <CityInput
            type="text"
            placeholder="Cidade"
            {...register('city')}
            className={formErrors.city && 'invalidInput'}
          />
          <StateInput
            type="text"
            placeholder="UF"
            list="state-suggestions"
            {...register('state')}
            className={formErrors.state && 'invalidInput'}
          />
          <datalist id="state-suggestions">
            {states.map((state) => (
              <option key={state} value={state} />
            ))}
          </datalist>
        </FormFourthLine>
      </FormContainer>
      <PaymentMethodSelector />
    </div>
  )
}
