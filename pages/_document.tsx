import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  //FONT AWESOME ADDED FOR TIME BEING TO AVOID BEING BLOCKED
  render() {
    return (
      <Html lang="en">
        <Head>
        <title>WeScoreAnyCar</title>
        <meta property="og:title" content="WeScoreAnyCar" key="home" />
        <meta
          name="description"
          content="Score your vehicle, and find out how your car compares to others. It's like a credit score for your car."
        />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument