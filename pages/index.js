// @ts-nocheck
import Head from "next/head";
import Image from "next/image";
import { Container, Stack } from "react-bootstrap";
import { stripe } from "../stripe";
import { useSpring, animated } from "react-spring";
import { useState, useContext, useEffect } from "react";
import { SkeletonCard, Card } from "../components";
import { Context } from "../context/MainContext.js";

export default function Home({ products }) {
  const [load, setLoad] = useState(true);
  const { addProducts } = useContext(Context);
  const props = useSpring({
    to: { marginTop: "20px" },
    from: { marginTop: "0px" },
    delay: 200,
  });
  useEffect(() => {
    addProducts(products);
  });
  return (
    <Container fluid="xl">
      <Head>
        <title>Home</title>
      </Head>
      <Stack
        direction="horizontal"
        gap={4}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
          flexWrap: "wrap",
          maxWidth: "70%",
          margin: "0 auto",
          padding: "10px 0 20px 0",
        }}
      >
        {products.map((product, i) => (
          <animated.div key={i} style={props}>
            {load ? (
              <SkeletonCard
                changeLoad={setLoad}
                load={load}
                product={product}
              />
            ) : (
              <Card product={product} />
            )}
          </animated.div>
        ))}
      </Stack>
    </Container>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  // This value is considered fresh for ten seconds (s-maxage=10).
  // If a request is repeated within the next 10 seconds, the previously
  // cached value will still be fresh. If the request is repeated before 59 seconds,
  // the cached value will be stale but still render (stale-while-revalidate=59).
  //
  // In the background, a revalidation request will be made to populate the cache
  // with a fresh value. If you refresh the page, you will see the new value.
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 6,
  });
  return {
    props: {
      products: products.data,
    },
  };
};
