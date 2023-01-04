import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cartActions';
import { fetchCartData } from './store/cartActions';
let initial = true;
function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.ui.show);
  const cart = useSelector(state => state.cart);
  const error = useSelector(state => state.ui.isError);
   useEffect(()=>{
    dispatch(fetchCartData());
   },[dispatch]);
  useEffect(() =>{
  if(initial){
   
    initial=false;
    return;
  }
  if(cart.changed){
  dispatch(sendCartData(cart));
  }
  },[cart,dispatch])
  return (
    <Layout>
     {error && <Notification   status={error.status} title={error.title} message={error.message}/>}
     {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
