import React from 'react'
import Head from 'next/head'

import Logo from '~/assets/logo.svg'

import * as S from '~/styles/pages/home'

const Home: React.FC = () => (
  <S.Container>
    <Head>
      <title>Gabriel França</title>
    </Head>

    <Logo />
  </S.Container>
)

export default Home
