import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CalculateIcon from "@mui/icons-material/Calculate";
import PeopleIcon from "@mui/icons-material/People";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import logo from "../assets/images/logo.jpg";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const drawerWidth = 256;

const links = [
  {
    name: "Dashboard",
    icon: <DashboardIcon className="mr-2" />,
    path: "/dashboard",
  },
  {
    name: "Financial Reports",
    icon: <CalculateIcon className="mr-2" />,
    path: "/financial-reports",
  },
  {
    name: "Student Records",
    icon: <PeopleIcon className="mr-2" />,
    path: "/student-records",
  },
  {
    name: "Payment Records",
    icon: <AccountBalanceWalletIcon className="mr-2" />,
    path: "/payment-records",
  },
  {
    name: "Billing Statement",
    icon: <PointOfSaleIcon className="mr-2" />,
    path: "/billing-statement",
  },
  {
    name: "Logout",
    icon: <ExitToAppIcon className="mr-2 text-red-500" />,
    path: "/logout",
  },
];

function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const sidebar = (
    <div className="w-64 bg-gray-900 text-white flex flex-col h-full">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">Billing System</span>{" "}
          <img src={logo} alt="Logo" className="h-8 w-auto rounded-full" />
        </div>
      </div>

      <nav className="mt-5 px-2">
        <p className="text-xs text-gray-400 mb-4">Navigation</p>

        <div className="space-y-4">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-2.5 text-sm font-medium rounded-lg duration-200 ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="mt-auto p-4 border-t border-gray-800">
        <div className="flex items-center">
          <img className="h-8 w-8 rounded-full" src={logo} alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Sample Admin Name</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 w-full bg-gray-900 p-3 z-50 flex items-center">
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon className="text-white" />
        </IconButton>
        <span className="text-white ml-2 font-semibold">Menu</span>
      </div>

      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              backgroundColor: "transparent",
            },
          }}
        >
          {sidebar}
        </Drawer>

        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              backgroundColor: "transparent",
              border: 0,
            },
          }}
        >
          {sidebar}
        </Drawer>
      </Box>

      <div className="lg:hidden h-14"></div>
    </>
  );
}

export default Sidebar;
