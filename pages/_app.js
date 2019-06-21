import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { StoreProvider } from 'easy-peasy'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <StoreProvider store={reduxStore}>
          <Component {...pageProps} />
        </StoreProvider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
