import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cartReducer';
const CartItem = (props) => {
  const dispatch = useDispatch();
  const {id, title, quantity, total, price } = props.item;
  const cartdeleteHandler = () =>{
  dispatch(cartActions.removeItemFromCart(id));
  }
  const cartIncreaseHandler = () =>{
    dispatch(cartActions.addItemTocart({id,price,title}))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={cartdeleteHandler}>-</button>
          <button onClick = {cartIncreaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
