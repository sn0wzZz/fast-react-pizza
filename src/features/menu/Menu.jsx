import { useLoaderData } from 'react-router-dom'
import { getMenu } from '../../services/apiRestaurant'
import MenuItem from './MenuItem'

function Menu() {
  const menu = useLoaderData()
  return (
    //grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
    <ul className=" gap-2 divide-y divide-stone-200 dark:divide-stone-50 p-3">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu()
  return menu
}

export default Menu
