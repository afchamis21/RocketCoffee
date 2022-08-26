import styled from 'styled-components'

export const SuccessWindowContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 0 0.5rem;

  margin-top: 5rem;

  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    h1 {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      color: ${(props) => props.theme['yellow-900']};
      font-size: 2rem;
    }
    p {
      font-size: 1.25rem;
      color: ${(props) => props.theme['gray-800']};
    }
  }
`

export const DeliveryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  max-width: 32.875rem;
  width: 100%;

  // Fazendo a border com gradiente
  border: 1px solid transparent;
  border-radius: 6px 36px;
  position: relative;
  background: ${(props) => props.theme['gray-100']};

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    z-index: -1;
    margin: -1px;
    border-radius: 6px 36px;
    background: linear-gradient(
      102.89deg,
      ${(props) => props.theme['yellow-500']} 2.61%,
      ${(props) => props.theme['purple-500']} 98.76%
    );
  }

  // Acabou a border com gradiente
`

const BaseDeliveryInfo = styled.div`
  display: flex;
  gap: 0.75rem;

  align-items: flex-start p {
    color: ${(props) => props.theme['gray-700']};
  }

  span {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
  }
  svg {
    color: ${(props) => props.theme['gray-100']};
  }
`
export const AddressInfo = styled(BaseDeliveryInfo)`
  span {
    background-color: ${(props) => props.theme['purple-900']};
  }
`

export const DeliveryPrediction = styled(BaseDeliveryInfo)`
  span {
    background-color: ${(props) => props.theme['yellow-500']};
  }
`

export const PaymentInfo = styled(BaseDeliveryInfo)`
  span {
    background-color: ${(props) => props.theme['yellow-900']};
  }
`
