import { createContext, ReactNode, useState } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const newDeliveryFormValidationSchema = zod.object({
  zipCode: zod.string().min(1).length(9, 'CEP inválido'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe o estado'),
})

type NewDeliveryFormData = zod.infer<typeof newDeliveryFormValidationSchema>

export type PaymentMethod = 'credit' | 'debit' | 'cash' | null

interface ResultData {
  formData: NewDeliveryFormData
  paymentMethod: PaymentMethod
}

interface FormContextType {
  activePaymentMethod: PaymentMethod
  newDeliveryForm: UseFormReturn<NewDeliveryFormData, any>
  resultData?: ResultData | undefined
  handleSelectPaymentMethod: (paymentMethod: PaymentMethod) => void
  handleCreateNewDelivery: (data: NewDeliveryFormData) => void
}

export const FormContext = createContext({} as FormContextType)

interface FormContextProviderProps {
  children: ReactNode
}

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [activePaymentMethod, setActivePaymentMethod] =
    useState<PaymentMethod>(null)

  const [resultData, setResultData] = useState<ResultData>()

  function handleSelectPaymentMethod(paymentMethod: PaymentMethod) {
    setActivePaymentMethod(paymentMethod)
  }

  const newDeliveryForm = useForm<NewDeliveryFormData>({
    resolver: zodResolver(newDeliveryFormValidationSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const { reset } = newDeliveryForm
  const navigate = useNavigate()

  function handleCreateNewDelivery(data: NewDeliveryFormData) {
    setResultData({ formData: data, paymentMethod: activePaymentMethod })
    navigate('cart/success')
    setActivePaymentMethod(null)
    reset()
  }

  const ContextValue = resultData
    ? {
        activePaymentMethod,
        newDeliveryForm,
        handleSelectPaymentMethod,
        handleCreateNewDelivery,
        resultData,
      }
    : {
        activePaymentMethod,
        newDeliveryForm,
        handleSelectPaymentMethod,
        handleCreateNewDelivery,
      }

  return (
    <FormContext.Provider value={ContextValue}>{children}</FormContext.Provider>
  )
}
