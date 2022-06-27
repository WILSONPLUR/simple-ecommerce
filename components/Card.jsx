import React from "react";
import { Card, Button, Stack, Placeholder } from "react-bootstrap";
import Link from "next/link";

const CardItem = ({ product: { name, images, default_price, id } }) => {
  return (
    <>
      <Card style={{ maxWidth: "15rem", maxHeight: "100%" }}>
        <Card.Img className="w-100 mw-100" src={images} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>${default_price.unit_amount / 100}</Card.Text>
          <Link href={`/${id}`}>{"Buy it"}</Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardItem;
