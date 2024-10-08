import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { Button } from "../ui/button.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { FaUserCircle } from "react-icons/fa";
import { FaKey, FaPencil } from "react-icons/fa6";
import { PiCarProfileFill } from "react-icons/pi";
import { MdLogout } from "react-icons/md";

import { LogOut, reset } from "../../features/auth-slice.js";

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, admin } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    if (admin) {
      navigate("/admin");
    } else if (user) {
      navigate("/");
    }
  };

  if (user) {
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full"
            >
              <FaUserCircle
                className="text-blue-500"
                size={20}
              />
              <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {/* <DropdownMenuItem>
                <FaKey className="mr-2 h-4 w-4" />
                <Link to="/change-password/:id">
                  <span>Ubah Password</span>
                </Link>
              </DropdownMenuItem> */}
              <DropdownMenuItem>
                <FaPencil className="mr-2 h-4 w-4" />
                <Link to="/testimonial">
                  <span>Tambah Testimonial</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <PiCarProfileFill className="mr-2 h-4 w-4" />
                <Link to="/riwayat-booking">
                  <span>Riwayat Booking</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={logout}
              className="cursor-pointer"
            >
              <MdLogout className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  } else if (admin) {
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full"
            >
              <FaUserCircle
                className="text-blue-500"
                size={20}
              />
              <DropdownMenuLabel>{admin.name}</DropdownMenuLabel>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={logout}
              className="cursor-pointer"
            >
              <MdLogout className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
};

export default ProfileDropdown;
