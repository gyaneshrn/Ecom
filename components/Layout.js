import Head from "next/head";
import { AppBar, Typography, Toolbar, Container } from "@material-ui/core";
import useStyles from "../util/style";

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Ecom</title>
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography>Ecom</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All Rights reserved. Next Ecom</Typography>
      </footer>
    </div>
  );
}
