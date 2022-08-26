import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0.5rem;

  border-bottom: 2px solid ${(props) => props.theme['purple-500']};
  img {
    width: 85px;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      color: ${(props) => props.theme['purple-900']};
      font-size: 0.875rem;
      background: ${(props) => props.theme['purple-100']};

      padding: 0.5rem;
      border-radius: 6px;
    }
    a {
      color: ${(props) => props.theme['yellow-900']};
      background: ${(props) => props.theme['yellow-100']};
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 6px;

      position: relative;

      .counter {
        width: 1.25rem;
        height: 1.25rem;
        background: ${(props) => props.theme['yellow-900']};
        position: absolute;
        top: -0.625rem;
        right: -0.625rem;
        border-radius: 9999px;
        color: ${(props) => props.theme.white};
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 0.75rem;
        font-weight: bold;
      }
    }
  }
`
