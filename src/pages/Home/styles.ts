import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  gap: 6.75rem;
`

export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  flex-wrap: wrap;
  margin-top: 5.875rem;

  img {
    margin: 0 auto;
  }
`

export const IntroText = styled.div`
  min-width: 22rem;
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;
    color: ${(props) => props.theme['gray-900']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
    margin-top: 1rem;
  }
`

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 20px;

  .firstInfo {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['yellow-900']};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      width: 2rem;
      height: 2rem;
    }
  }

  .secondInfo {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['gray-700']};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      width: 2rem;
      height: 2rem;
    }
  }

  .thirdInfo {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['yellow-500']};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      width: 2rem;
      height: 2rem;
    }
  }

  .fourthInfo {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['purple-500']};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      width: 2rem;
      height: 2rem;
    }
  }
`
