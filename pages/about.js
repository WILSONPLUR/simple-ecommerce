import React from "react";
import { Container } from "react-bootstrap";
import Head from "next/head";

const About = () => {
  return (
    <Container
      fluid="xl"
      className="text-center min-vh-100 d-flex justify-content-center align-items-center"
    >
      <Head>
        <title>About</title>
      </Head>
      <h1>This is an example of ecommerce</h1>
    </Container>
  );
};

export default About;
