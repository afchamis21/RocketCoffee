import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  padding-bottom: 2rem;
  padding-right: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  & + div {
    padding-top: 2rem;
  }

  img {
    height: 4rem;
  }

  .main {
    display: flex;
    gap: 1.25rem;

    .info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h3 {
        font-family: 'Baloo 2', cursive;
        font-size: 1.25rem;
        color: ${(props) => props.theme['gray-800']};
      }

      p {
        text-align: left;

        color: ${(props) => props.theme['gray-800']};
      }

      .amount {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        background: ${(props) => props.theme['gray-400']};
        padding: 0.25rem;
        border-radius: 6px;
        width: 4.5rem;
        height: 2.375rem;

        svg {
          color: ${(props) => props.theme['purple-500']};
          transition: color 0.1s;

          :hover {
            color: ${(props) => props.theme['purple-900']};
            cursor: pointer;
          }
        }
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .price {
      display: flex;
      gap: 0.125rem;
      align-items: baseline;
      font-size: 0.875rem;

      span + span {
        font-family: 'Baloo 2', cursive;
        font-size: 1.5rem;
        font-weight: 800;
      }
    }
  }

  .buttons {
    display: flex;
    gap: 0.5rem;

    .deleteButton {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      background: ${(props) => props.theme['gray-400']};
      padding: 0.25rem;
      border-radius: 6px;
      height: 2.375rem;
      border: none;

      svg {
        color: ${(props) => props.theme['purple-500']};
        transition: color 0.1s;
      }

      :hover {
        color: ${(props) => props.theme['purple-900']};
        cursor: pointer;
      }
    }
  }
`
