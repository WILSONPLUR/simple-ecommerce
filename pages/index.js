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

export const getServerSideProps = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 7,
  });
  return {
    props: {
      products: products.data,
    },
  };
};
