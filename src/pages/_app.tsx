import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import GlobalStyle from '~/styles/global'
import theme from '~/styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Gabriel França</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Hey, I'm Gabriel França! Passionate about programming and technology. Always looking to create valuable and well-crafted softwares that can help the world in some way. Working remotely, focused on TypesScript, Node.js, ReactJS, NextJS and React Native. Currently I have been studying ways to quickly and easily write code that is easy to read and maintain, through software architectures, principles and good programming practices. I love to study, learn and share new things."
        />
      </Head>

      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
