import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.logo
      src="/img/logo.svg"
      alt="Imagem de um atomo  e React Avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, ReactJS, NestJS e Styled Components
    </S.Description>
    <S.Illustration
      src="img/hero-illustration.svg"
      alt="Um desenvolvedor em frente para uma tela do com codigo."
    />
  </S.Wrapper>
)

export default Main
