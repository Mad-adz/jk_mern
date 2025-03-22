import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BiUser } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { slideDown, slideUp } from "@/animation";
import { user } from "@/assets/images";
import { useAuth } from "@/hooks/useAuth";
import { useSelector } from "react-redux";

const ProfileMenu = () => {
  const isAdmin = false;
  const [isMenu, setIsMenu] = useState(false);

  const { isAuthenticated, user: userData } = useSelector(
    (state) => state.auth
  );
  console.log({ isAuthenticated, userData });

  const { logoutMutation } = useAuth(); // Access loginMutation from useAuth
  const { mutate, isPending, isSuccess, data, isError, error } = logoutMutation;

  const logoutHandler = async () => {
    alert("Logged out!");
    mutate();
  };
  return (
    <div>
      <div className="menu-container">
        {isAuthenticated ? (
          <>
            <div
              className="h-[72px] relative flex justify-center items-center gap-2 cursor-pointer"
              onClick={() => setIsMenu(!isMenu)}
              onMouseEnter={() => setIsMenu(true)}
              onMouseLeave={() => setIsMenu(false)}
            >
              <div className="w-8 h-8 rounded-full shadow-lg overflow-hidden flex items-center justify-center">
                <motion.img
                  src={user}
                  alt="User"
                  className="w-full h-full object-cover"
                  // whileHover={{ scale: 1.15 }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <AnimatePresence>
                {isMenu && (
                  <>
                    <motion.ul
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={isMenu ? slideUp : slideDown}
                      onMouseLeave={() => setIsMenu(false)}
                      className=" p-4 w-32 bg-yellow-50 backdrop-blur-md rounded-md shadow-xl absolute top-[56px] right-0 flex flex-col gap-3"
                    >
                      <li>
                        {isAdmin && (
                          <Link
                            to={"/"}
                            className="text-sm font-medium text-zinc-600 hover:text-emerald-500"
                          >
                            Dashboard
                          </Link>
                        )}
                      </li>
                      <li>
                        <Link
                          to={"/"}
                          className="text-sm font-medium text-zinc-600 hover:text-emerald-500"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/"}
                          className="text-sm font-medium text-zinc-600 hover:text-emerald-500"
                        >
                          Orders
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/"}
                          className="text-sm font-medium text-zinc-600 hover:text-emerald-500"
                        >
                          Favourites
                        </Link>
                      </li>
                      <li>
                        <div
                          onClick={logoutHandler}
                          className="group flex items-center gap-2"
                        >
                          <MdLogout className="text-sm font-medium text-zinc-600 group-hover:text-emerald-500" />
                          <p className="text-sm font-medium text-zinc-600 group-hover:text-emerald-500">
                            Logout
                          </p>
                        </div>
                      </li>
                    </motion.ul>
                  </>
                )}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <>
            <NavLink
              to="login"
              className={"flex items-center justify-center gap-2"}
            >
              <BiUser className="text-2xl" />
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileMenu;
