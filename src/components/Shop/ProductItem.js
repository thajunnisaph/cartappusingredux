import { useDispatch } from "react-redux/es/exports";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cartReducer";
const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, description } = props;
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemTocart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
