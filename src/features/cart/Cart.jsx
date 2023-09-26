import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';


function Cart() {
  const { username } = useSelector((state) => state.user);
  const cart  = useSelector(getCart);
  const dispatch = useDispatch()

  function handleClear(){
    dispatch(clearCart())
  }

  if(!cart.length) return <EmptyCart/>

  return (
    <div className="px-4 py-5">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold dark:text-stone-50">Your cart, {username}</h2>
      <ul className=" mt-3 divide-y divide-stone-200 border-b dark:divide-stone-50">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          {" "}
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClear}>
          {" "}
          Clear cart
        </Button>
        <button></button>
      </div>
    </div>
  );
}

export default Cart;
