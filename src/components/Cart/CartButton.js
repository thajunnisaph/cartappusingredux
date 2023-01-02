import classes from './CartButton.module.css';
import { useDispatch ,useSelector} from 'react-redux';
import { cartActions } from '../../store/cartReducer';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalqnty = useSelector((state) => state.cart.totalQnty);
  const toggleHandler = () =>{
  dispatch(cartActions.showHide());
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalqnty}</span>
    </button>
  );
};

export default CartButton;
