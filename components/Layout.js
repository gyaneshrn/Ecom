import Head from "next/head";
import {
  AppBar,
  Typography,
  Toolbar,
  Container,
  Link,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import useStyles from "../util/style";
import NextLink from "next/link";

export default function Layout({ title, description, children }) {
  const classes = useStyles();
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      body1: {
        fontWeight: "normal",
      },
    },
    palette: {
      type: "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Ecom` : "Next Ecom"}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar className={classes.navbar} position="static">
          <Toolbar>
            <NextLink passhref href="/">
              <Link>
                <Typography className={classes.brand}>Ecom</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart" passhref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passhref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All Rights reserved. Next Ecom</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
