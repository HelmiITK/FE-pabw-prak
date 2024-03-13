import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getMe, logout } from "../redux/actions/authActions";

function Navbar() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { user, token } = useSelector((state) => state.auth);


   //logout with redux
   const onLogout = () => {
      dispatch(logout());
      navigate("/login");
   };

   //get me with redux
   useEffect(() => {
      if (token) {
         dispatch(getMe(navigate, null, "/login"));
      }
   }, [dispatch, navigate, token]);

   return (
      <>
         <div className="w-full lg:mt-2 fixed z-50">
            <div className="lg:flex lg:justify-between lg:mx-2 lg:mt-2">
               {/* jika user ada atau sdh login ini baru ditampilkan */}
               {user && (
                  <>
                     <div className="text-3xl lg:ml-8 text-red-600 font-extrabold flex justify-center">
                        <Link as={Link} to={"/"}>
                           <h1>P A B W</h1>
                        </Link>
                     </div>
                  </>
               )}
               <div>
                  {user ? (
                     <>
                        <div className="hidden lg:flex lg:mr-10 lg:items-baseline">
                           <div className="mt-3 mr-4 ">
                              <NavLink
                                 as={Link}
                                 to="/myprofile"
                                 className="text-white font-bold text-lg hover:text-red-600"
                              >
                                 {user?.name}
                              </NavLink>
                           </div>
                           <button
                              onClick={onLogout}
                              className="border-2 border-red-600 bg-red-600 p-2 rounded-xl text-white hover:bg-red-800 hover:border-black mr-4"
                           >
                              Logout
                           </button>
                        </div>
                     </>
                  ) : (
                     <div></div>
                  )}
               </div>
            </div>
         </div>
      </>
   );
}

export default Navbar;