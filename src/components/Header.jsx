import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

const Header = () => {
  const navigate = useNavigate();
  // navigate to a certain page
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userState);

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  };
  return (
    <header className=" bg-gray-300 py-2 text-neutral-content ">
      {/* daisyUI bg-neutral text-neutral-content*/}
      <div className="align-element flex justify-center sm:justify-end ">
        {/* USER */}
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              className="btn btn-xs btn-outline hover:scale-110 "
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link
              to="/login"
              className="link link-hover text-xs sm:text-sm hover:scale-110  hover:text-gray-600 duration-300"
            >
              Sign in / Guest
            </Link>
            <Link
              to="/register"
              className="link link-hover text-xs sm:text-sm hover:scale-110  hover:text-slate-600 duration-300"
            >
              Create an Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
