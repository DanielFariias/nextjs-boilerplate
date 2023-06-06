import React from 'react'
import * as S from './styles'

interface IMainProps {
  title?: string
  description?: string
}

export default function Main({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}: IMainProps) {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </S.Wrapper>
  )
}
