import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";


export default function Header() {
  return (
    <header className=" flex items-center justify-between rounded-b-2xl bg-yellow-400 dark:bg-yellow-500 px-4 py-3  uppercase shadow-xl sm:px-6 font-pizza">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
