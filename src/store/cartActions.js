import { cartActions } from "./cartReducer";
import { uiActions } from "./UIreducer";

export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.notification({
          status: "Pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      const sendRequest = async () => {
        const response = await fetch(
          "https://quoteapp-fefde-default-rtdb.firebaseio.com/cart.json",
          { method: "PUT", body: JSON.stringify({items:cart.items,totalQnty:cart.totalQnty}) }
        );
        if (!response.ok) {
          throw new Error("Sending cart data Failed");
        }
      };
      try {
        await sendRequest();
        dispatch(
          uiActions.notification({
            status: "success",
            title: "Success...",
            message: "Send cart data successfully",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.notification({
            status: "error",
            title: "Error...",
            message: "Sending cart data Failed",
          })
        );
      }
    };
  };

  export const fetchCartData = () =>{
      return async(dispatch) =>{
          dispatch(
              uiActions.notification({
                status: "Pending",
                title: "Sending...",
                message: "fetching cart data!",
              })
            );
       const fetchData = async() =>{
         const res =await fetch('https://quoteapp-fefde-default-rtdb.firebaseio.com/cart.json')
        

         if(!res.ok){
          throw new Error('fetching cart data failed')
         }
         const data = await res.json();
         return data;
       }  
       try{
         const Data =  await fetchData();
          dispatch(cartActions.replaceCart({items:Data.items || [],totalQnty:Data.totalQnty}));
          dispatch(
              uiActions.notification({
                status: "success",
                title: "Success...",
                message: "fetch cart data successfully",
              })
            );
       }catch (error) {
          dispatch(
              uiActions.notification({
                status: "error",
                title: "Error...",
                message: "Fetching cart data Failed",
              })
            );
       }   
     
      }
  }