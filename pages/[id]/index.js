// @ts-nocheck
import Head from "next/head";
import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import { Container, Stack, Button, Alert, Image } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Context } from "../../context/MainContext";
import { stripe } from "../../stripe";
import axios from "axios";
import getStripe from "../../lib/getStripe";

const ProductDetail = ({ product, price }) => {
  const { count, addCount, minusCount } = useContext(Context);
  const [products, setProducts] = useState([product]);
  const [show, setShow] = useState(false);
  const [card, setCard] = useState("4242 4242 4242 4242");
  const [isCopied, setIsCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const redirectToCheckout = async () => {
    if (count > 0) {
      const {
        data: { id },
      } = await axios
        .post("/api/checkout_sessions", {
          items: Object.entries(products).map(([_]) => ({
            price: price.id,
            quantity: count,
          })),
        })
        .catch((err) => {
          alert("Error: " + err.message);
        });

      //Redirect to stripe checkout
      const stripe = await getStripe();
      await stripe.redirectToCheckout({ sessionId: id });
    } else if (count === 0) {
      setShow(true);
    }
  };
  // const handleCheckout = async (priceId) => {
  //   const session = await createCheckoutSession({
  //     success_url: window.location.href,
  //     cancel_url: window.location.href,
  //     line_items: [{ price: priceId, quantity: 1 }],
  //     payment_method_types: ["card"],
  //     mode: "payment",
  //   });
  //   const stripe = await loadStripe(
  //     "pk_test_51LAtieLrnNWCZqyrlmUNqrL9xMgOV4D9l585auNjnjXlgNq9d1ll7CHqLzLpFKeKHcNtsQlOXnUaALi6vydjnpUE00jY1bjTwP"
  //   );
  //   if (stripe) {
  //     stripe.redirectToCheckout({ sessionId: session.data.id });
  //   }
  // };
  const copyCard = () => {
    navigator.clipboard
      .writeText(card)
      .then(() => setIsCopied(true))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);
  return (
    <Container fluid="xl" className="mb-3 mx-auto">
      <Head>
        <title>{product.name}</title>
      </Head>
      {loading && (
        <>
          <Stack className="col-sm-3">
            <Link href="/">
              {/* <FontAwesomeIcon icon={solid("arrow-left")} /> */}
              Back
            </Link>
          </Stack>
          <Stack gap={3} className="col-lg-5 r-lg-1 mx-auto w-xl-25 w-sm-100">
            <Image
              fluid
              src={product?.images[0]}
              alt={product?.name.toLowerCase()}
            />
            <h1>{product.name && <Skeleton />}</h1>
            <p>{product.description && <Skeleton />}</p>
          </Stack>
          <Stack
            direction="horizontal"
            className="mx-auto mb-7 d-flex justify-content-center"
          >
            <Skeleton count={1} />
          </Stack>
        </>
      )}
      {!loading && (
        <>
          <Stack className="col-sm-3">
            <Link href="/">
              {/* <FontAwesomeIcon icon={solid("arrow-left")} /> */}
              Back
            </Link>
          </Stack>
          <Stack gap={3} className="col-lg-5 r-lg-1 mx-auto w-xl-25 w-sm-100">
            <Image
              fluid
              src={product?.images[0]}
              alt={product?.name.toLowerCase()}
            />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </Stack>
          <Stack
            direction="horizontal"
            className="d-flex align-items-center col-lg-5 mx-auto my-3"
          >
            <p className="mb-0 mr-1">{card}</p>
            <Button
              size="sm"
              variant={isCopied ? "success" : "outline-info"}
              onClick={copyCard}
            >
              {isCopied ? "Copied!" : "Copy"}
            </Button>
          </Stack>
          <Stack
            direction="horizontal"
            className="mx-auto mb-3 d-flex justify-content-center"
          >
            <Button onClick={addCount}>+</Button>
            <p className="mx-3 my-auto">{count}</p>
            <Button onClick={minusCount}>-</Button>
          </Stack>
          <Stack
            direction="horizontal"
            className="mx-auto mb-7 d-flex justify-content-center"
          >
            <Button
              variant="danger"
              onClick={redirectToCheckout}
              // style={{ marginRight: "10px" }}
            >
              Buy it
            </Button>
            {/* <Button variant="success" style={{ marginLeft: "10px" }}>
          Add to Cart
        </Button> */}
          </Stack>
          {show && (
            <Stack direction="vertical" style={{ marginTop: "20px" }}>
              <Alert variant="info" onClose={() => setShow(false)} dismissible>
                <Alert.Heading className="text-center">
                  Min. quantity value must be - 1
                </Alert.Heading>
              </Alert>
            </Stack>
          )}
        </>
      )}
    </Container>
  );
};

export default ProductDetail;

export const getStaticProps = async (ctx) => {
  const product = await stripe.products.retrieve(ctx.params.id, {
    expand: ["default_price"],
  });
  const price = await stripe.prices.retrieve(product.default_price.id);
  return {
    props: {
      price: price,
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const products = await stripe.products.list();
  const paths = products.data.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
