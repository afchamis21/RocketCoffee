import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-200']};

  border-radius: 6px;
  margin-top: 1rem;
`
const BaseInput = styled.input`
  padding: 0.75rem;
  background: ${(props) => props.theme['gray-300']};

  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;

  &.invalidInput {
    outline: 1px solid red;
  }
`

export const FormTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;

  svg {
    color: ${(props) => props.theme['yellow-900']};
  }

  div {
    h4 {
      font-weight: 400;
      color: ${(props) => props.theme['gray-800']};
    }
    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const ZipCodeInput = styled(BaseInput)`
  width: 12.5rem;
`

export const StreetInput = styled(BaseInput)`
  width: 100%;
`

export const FormThirdLine = styled.div`
  display: flex;
  gap: 0.75rem;

  position: relative;
  span {
    position: absolute;

    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-600']};
    right: 0.75rem;
    top: 0.85rem;
  }
`

export const NumberInput = styled(BaseInput)`
  width: 12.5rem;
`

export const ComplementInput = styled(BaseInput)`
  flex: 2;
`

export const FormFourthLine = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const NeighborhoodInput = styled(BaseInput)`
  width: 12.5rem;
`

export const CityInput = styled(BaseInput)`
  flex: 1;
`

export const StateInput = styled(BaseInput)`
  width: 4rem;
`
