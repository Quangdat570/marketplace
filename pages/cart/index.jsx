import React from 'react'
import { Stack, Table, Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from '../../store/features/cart/cart.slice';

const Cart = () => {
    
  const { items, totalPrice, incQty, decQty, removeItem, clearItem } =
        useSelector(selectCart);
    const dispatch = useDispatch();
    console.log(items)

    if (items.length === 0) {
      return (
          <div className="container">Giỏ hàng trống, đặt hàng đeeeeeeee</div>
      );
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

  return (
    <>
    </>
    // <div className="container">
    //         <p>Giỏ hàng</p>
    //         <Table striped bordered hover>
    //             <thead>
    //                 <tr>
    //                     <th>Hình ảnh</th>
    //                     <th>Thông tin</th>
    //                     <th>Số lượng</th>
    //                     <th></th>
    //                 </tr>
    //             </thead>

    //             <tbody>
    //                 {items.map((item) => (
    //                     <tr key={item.products.id}>
    //                         <td>
    //                             <img width={200} src={item.products.thumbnail} />
    //                         </td>
    //                         <td>
    //                             <Stack direction="vertical">
    //                                 <span>{item.product.title}</span>
    //                                 <span>${item.product.price}</span>
    //                             </Stack>
    //                         </td>
    //                         <td>
    //                             <ButtonGroup>
    //                                 <Button
    //                                     variant="light"
    //                                     onClick={() =>
    //                                         dispatch(decQty(item.product.id))
    //                                     }
    //                                 >
    //                                     -
    //                                 </Button>
    //                                 <Button variant="light">
    //                                     {item.quantity}
    //                                 </Button>
    //                                 <Button
    //                                     variant="light"
    //                                     onClick={() =>
    //                                         dispatch(incQty(item.product.id))
    //                                     }
    //                                 >
    //                                     +
    //                                 </Button>
    //                             </ButtonGroup>
    //                         </td>
    //                         <td>
    //                             <Button
    //                                 onClick={() => {
    //                                     handleDelete(item.product.id);
    //                                 }}
    //                             >
    //                                 Xóa
    //                             </Button>
    //                         </td>
    //                     </tr>
    //                 ))}
    //             </tbody>

    //             <tfoot>
    //                 <tr>
    //                     <td colSpan={3}>Tổng tiền</td>
    //                     <td>${totalPrice}</td>
    //                 </tr>
    //             </tfoot>
    //         </Table>

    //         <Button type="danger" onClick={handleClear}>
    //             Clear cart
    //         </Button>
    //     </div>
  )
}

export default Cart