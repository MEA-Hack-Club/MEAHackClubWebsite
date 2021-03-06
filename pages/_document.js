import Document, { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <body>
          <InitializeColorMode />
          <Main />
          <Head>
            <link rel="shortcut icon" href="/static/favicon.ico"/>
          </Head>
          <NextScript />
        </body>
      </Html>
    )
  }
}
