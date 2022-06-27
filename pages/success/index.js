import Head from "next/head";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Stack, Button } from "react-bootstrap";

const SuccessPage = () => {
  const router = useRouter();
  const backToHomePage = () => {
    router.push("/");
  };
  return (
    <Container fluid="xl">
      <Head>
        <title>Success!</title>
      </Head>
      <Stack
        direction="vertical"
        gap={0}
        className="d-flex justify-content-center text-center align-items-center min-vh-100 justify-content-center"
      >
        <h1>Thanks for purchase</h1>
        <p>You will receive your order very soon</p>
        <p>cups@mail.com</p>
        <Button onClick={backToHomePage} variant="outline-success">
          Back to Shopping
        </Button>
      </Stack>
    </Container>
  );
};

export default SuccessPage;
