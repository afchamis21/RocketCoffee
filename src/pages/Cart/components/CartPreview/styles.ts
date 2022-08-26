import styled from 'styled-components'

export const CartPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  margin-top: 1rem;

  padding: 2.5rem;
  background: ${(props) => props.theme['gray-200']};

  border-radius: 6px 44px;
  width: 28rem;

  .emptyCartMessage {
    margin-bottom: 2rem;
  }
`

export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-700']};

    p {
      font-size: 0.875rem;
    }
  }

  .totalValue {
    font-weight: bold;
    p {
      font-size: 1.25rem;
      color: ${(props) => props.theme['gray-800']};
    }
    span {
      font-size: 1.25rem;
      color: ${(props) => props.theme['gray-800']};
    }
  }
`
export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;

  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-500']};

  font-size: 0.875rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};

  transition: filter 0.2s;

  &:hover:not(:disabled) {
    filter: brightness(0.9);
    cursor: pointer;
  }

  &:disabled {
    filter: brightness(0.7);
    cursor: not-allowed;
  }
`

export const ProductsPreviewContainer = styled.div`
  max-height: 27rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['gray-800']};
    border-radius: 10px;

    &:hover {
      background: ${(props) => props.theme['gray-700']};
    }
  }
  ::-webkit-scrollbar-thumb:hover {
  }
`
