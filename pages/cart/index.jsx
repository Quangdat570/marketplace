import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../store/features/cart/cart.slice";

const Cart = () => {
  const { items, products, totalPrice, incQty, decQty, removeItem, clearItem } =
    useSelector(selectCart);
  const dispatch = useDispatch();
  console.log("items", items);
  console.log(products);

  if (items.length === 0) {
    return <div className="container">Giỏ hàng trống, đặt hàng đeeeeeeee</div>;
  }

  const handleDelete = (productId) => {
    if (confirm("Xoas sanr pham?")) {
      dispatch(removeItem(productId));
    }
  };

  const handleClear = () => {
    if (confirm("Xoa toan bo san pham khoi gio hang")) {
      dispatch(clearItem());
    }
  };
  return <div>Cart</div>;
};

export default Cart;
