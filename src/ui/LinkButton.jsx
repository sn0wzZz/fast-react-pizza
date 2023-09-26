import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const btnClass =
    "text-sm text-blue-500 dark:text-blue-300 py-2 px-3 rounded-full hover:text-blue-600 dark:hover:text-blue-400 bg-neutral-200 dark:bg-neutral-600 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors";
  if (to === "-1")
    return <button className={btnClass} onClick={() => navigate(-1)}>{children}</button>;
  return (
    <Link to={to} className={btnClass}>
      {children}
    </Link>
  );
}
