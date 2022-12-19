// import React from 'react'

// const ProductsDetail = ( {product}) => {
//   return (
//     <>
//     <div>ProductsDetail</div>
//     <div>{product.title}</div>
    
//     </>
//   )
// }

// export default ProductsDetail

// export const getStaticProps = async (ctx) => {
//     const {pid} = ctx.params;
//     const res = await fetch(
//       "https://localhost/3002/products" + pid,
      
//     );
//     const data = await res.json();
  
//     return {
//       props: {
//         data,
//       },
//     };
//   };


// export const getStaticPaths = async () => {
//     const res = await fetch(
//       "https://localhost/3002/products",
      
//     );
//     const data = await res.json();
    
  
//     return {
//       paths: data.map((item) => {{params : {pid: String(item.id)}}}),
//       fallback: false,
//       product:data,
//     };
//   };