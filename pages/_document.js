import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheets"
            href="https://fonts.googleapis.com/css?family=Roboto:300:400,500,700&display=swap"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = async () => {
    return originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  };
  const intialProps = await Document.getInitialProps(ctx);
  return {
    ...intialProps,
    styles: [
      ...React.Children.toArray(intialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
