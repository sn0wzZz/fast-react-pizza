import { Outlet, useNavigation } from "react-router-dom";

import Loader from "./Loader";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-slate-100 dark:bg-stone-900">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll overflow-x-hidden">
        <main className=" mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
