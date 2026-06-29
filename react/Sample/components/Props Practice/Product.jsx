const Product = ({ product }) => {
  console.log(product.product);
  return (
    <>
      <h1>Name : {product.product.name}</h1>
      <h2>Id is : {product.product.id}</h2>
      <h3>Category : {product.product.category}</h3>
    </>
  );
};

export default Product;
