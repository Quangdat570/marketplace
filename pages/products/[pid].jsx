import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/features/cart/cart.slice";
import { useParams } from "react-router-dom";

const ProductsDetail = ({ product }) => {
  const dispatch = useDispatch();
  const handleClick = (productId) => {
    console.log(productId);
    dispatch(
      addItem({
        productId: productId,
        quantity: 1,
      })
    );
  };  
  console.log(product);

  return (
    <>
      <div>ProductsDetail</div>
      <button onClick={() => handleClick(product.id)}>buy</button>
    </>
  );
};

export default ProductsDetail;

export const getStaticProps = async (context) => {
  const id = context.params.pid;
  const res = await fetch("http://localhost:3002/products/" + id);
  const product = await res.json();

  return {
    props: {
      id,
      product,
    },
  };
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3002/products");
  const data = await res.json();

  const paths = data.map((product) => {
    return {
      params: { pid: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
