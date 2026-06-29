import productDetails from "./data.json";
import Product from "./Product";

const PropsParent = () => {
  return (
    <>
      <Product product={productDetails} />
    </>
  );
};

export default PropsParent;
