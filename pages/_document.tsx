import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { Fragment } from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        <Fragment key="1">
          {initialProps.styles}
        </Fragment>
      ]
    };
  }

  render() {
    return (
      <Html lang="pl">
        <Head>{CssBaseline.flush()}</Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
