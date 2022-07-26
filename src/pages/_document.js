import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body style={{margin: 0,padding: 0}} >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
