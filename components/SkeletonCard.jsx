import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";

const SkeletonCard = ({ changeLoad, load, product }) => {
  useEffect(() => {
    setTimeout(() => {
      changeLoad(false);
    }, 3000);
  });
  return (
    <>
      <Card style={{ maxWidth: "15rem", maxHeight: "100%" }}>
        <Card.Img className="w-100 mw-100" src={product.images} />
        <Card.Body>
          <Card.Title>{product.name && <Skeleton />}</Card.Title>
          <Card.Text>
            {product.default_price.unit_amount / 100 && <Skeleton />}
          </Card.Text>
          <Link href={``}>{"Buy it" && <Skeleton />}</Link>
        </Card.Body>
      </Card>
    </>
  );
};

// export const getServerSideProps = async (ctx) => {
//   const router = useRouter();
// };

export default SkeletonCard;
