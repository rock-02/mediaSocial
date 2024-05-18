import React from "react";
import { navigationMenu } from "./SideBarNavigation";
import { Avatar, Button, Card, Divider, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const SideBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className="pl-5 card h-screen flex flex-col justify-between py-5 relative">
      <div className="space-y-8">
        <div>
          <span className="logo font-bold text-xl">Media Social</span>
        </div>

        <div className="space-y-8">
          {navigationMenu.map((item) => (
            <div
              key={item.title}
              className="flex space-x-3 cursor-pointer items-center"
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Divider className="my-3" />
      <div className="flex items-center justify-between pt-0">
        <div className="flex items-center space-x-3">
          <Avatar
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="Remy Sharp"
          />
          <div>
            <p className="font-bold">codewithZOsh</p>
            <p className="opacity-70">@codewithZOsh</p>
          </div>
        </div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreVertIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </Card>
  );
};

export default SideBar;
