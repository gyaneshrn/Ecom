import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import data from "../util/data";
import NextLink from "next/link";

export default function Home() {
  return (
    <div>
      <Layout>
        <div>
          <h3>Products</h3>
          <Grid container spacing={3}>
            {data.products.map((product) => (
              <Grid item md={4} key={product.name}>
                <Card>
                  <NextLink passHref href={`/product/${product.slug}`}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={product.image}
                        title={product.title}
                      ></CardMedia>
                      <CardContent>
                        <Typography>{product.name}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </NextLink>
                  <CardActions>
                    <Typography>${product.price}</Typography>
                    <Button size="small" color="primary">
                      {" "}
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Layout>
    </div>
  );
}
