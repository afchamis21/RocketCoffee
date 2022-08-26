import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 40rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-200']};

  border-radius: 6px;
  margin-top: 0.75rem;

  .header {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['purple-500']};
    }

    h4 {
      font-weight: 400;
      color: ${(props) => props.theme['gray-800']};
    }
    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-700']};
    }
  }

  .buttons {
    display: flex;
    gap: 0.75rem;

    button {
      width: 100%;
      padding: 16px;
      border-radius: 6px;

      display: flex;
      align-items: center;
      gap: 0.75rem;

      text-transform: uppercase;
      font-size: 0.75rem;
      background: ${(props) => props.theme['gray-400']};

      border: 1px solid transparent;

      transition: all 0.1s;

      :hover {
        border: 1px solid ${(props) => props.theme['purple-500']};
        background: ${(props) => props.theme['purple-100']};
        cursor: pointer;
      }

      &.active {
        border: 1px solid ${(props) => props.theme['purple-500']};
        background: ${(props) => props.theme['purple-100']};
      }

      svg {
        color: ${(props) => props.theme['purple-500']};
      }
    }
  }
`
