import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="px-4 py-5">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <div className="flex justify-center items-center ">
        <p className="mt-7 font-semibold text-slate-500">
          Your cart is still empty. Start adding some pizzas :)
        </p>
      </div>
    </div>
  );
}

export default EmptyCart;
