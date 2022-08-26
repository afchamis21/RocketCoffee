import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  margin-top: 3.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme['gray-200']};

  width: 16rem;
  height: 19.375rem;
  padding: 0 1.5rem 1.25rem;
  border-radius: 6px 36px;
  img {
    margin-top: -20px;
  }

  .tags {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.25rem;
    text-transform: uppercase;

    span {
      background: ${(props) => props.theme['yellow-100']};
      padding: 0.25rem 0.5rem;
      border-radius: 100px;

      font-size: 0.625rem;
      font-weight: bold;
      color: ${(props) => props.theme['yellow-900']};
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    h3 {
      font-family: 'Baloo 2', cursive;
      font-size: 1.25rem;
      color: ${(props) => props.theme['gray-800']};
    }

    p {
      text-align: center;
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-600']};
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

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

    button {
      color: ${(props) => props.theme['gray-100']};
      background: ${(props) => props.theme['purple-900']};

      border: none;
      border-radius: 6px;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      transition: background-color 0.1s;

      :hover {
        background: ${(props) => props.theme['purple-500']};
        cursor: pointer;
      }
    }
  }
`
