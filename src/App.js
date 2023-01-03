import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { uiActions } from './store/UIreducer';
let initial = true;
function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.ui.show);
  const cart = useSelector(state => state.cart);
  const error = useSelector(state => state.ui.isError);

  useEffect(() =>{
    const sendCartToFirebase = async() =>{
      dispatch(uiActions.notification({status:'Pending',
      title:'Sending...' ,
    message:'Sending cart data!'}))
    const response =  await  fetch('https://quoteapp-fefde-default-rtdb.firebaseio.com/cart.json',
    {method:'PUT',body:JSON.stringify(cart)})
    if(!response.ok){
      throw new Error('Sending cart data Failed');
    }
     
    dispatch(uiActions.notification({status:'success',
    title:'Success...',
    message:'Send cart data successfully'}))
    
  }
  if(initial){
    initial=false;
    return;
  }
  sendCartToFirebase().catch((err) => {
    dispatch(uiActions.notification({status:'error',
    title:'Error...',
     message:'Sending cart data Failed'}));
  })
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
