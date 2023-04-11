import "./productlist.scss";
import { useStateValue } from "./StateProvider";
import Card from "./Card";

const ProductList = () => {
  const { initialState } = useStateValue();
  return (
    <div className="productList">
      {initialState.productList.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default ProductList;
