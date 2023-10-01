import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  // subscribing to the store using useSelector to select the slice of data from the store
  // while subscribing we should always use that only portion(slice) of that store. not the whole store
  // in that case it'll be less efficient.. 
   
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()
  const handleClearCart = () => {
     dispatch(clearCart());
  }

  return (
    <div className='body'>
        <h1> Cart  </h1>
        <button style={{background:'#000', padding:'10px', border: 'none', color:'#fff', cursor: 'pointer'}}
         onClick={handleClearCart}>clear cart</button>
         {cartItems.length===0 && <h1> Cart is empty. Add items to the cart!!! </h1> }
        <div>
           <ItemList items ={cartItems}/>
        </div>
    </div>
  )
}
export default Cart;