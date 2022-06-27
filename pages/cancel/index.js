import Head from "next/head";
import React from "react";
import { Container, Stack, Button } from "react-bootstrap";
import { useRouter } from "next/router";

const CancelPaymentPage = () => {
  const router = useRouter();
  // const { items } = useContext(Context);
  // const generateRandomProduct = () => {
  //   const randomIndex = Math.floor(Math.random() * items.length);
  //   const randomProduct = items[randomIndex];
  //   return randomProduct;
  // };
  const backToHomePage = () => {
    router.push("/");
  };
  return (
    <Container fluid="xl">
      <Head>
        <title>Cancel</title>
      </Head>
      <Stack
        direction="vertical"
        className="d-flex justify-content-center text-center align-items-center min-vh-100 justify-content-center"
      >
        <h1>You was refuse to pay...</h1>
        <p>A lot of cups in our store</p>
        <Button onClick={backToHomePage} variant="outline-success">
          Back to Shopping
        </Button>
      </Stack>
    </Container>
  );
};

export default CancelPaymentPage;
