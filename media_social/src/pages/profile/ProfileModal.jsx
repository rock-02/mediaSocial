import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Avatar, IconButton, TextField } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileAction } from "../../redux/Auth/auth.action";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  outline: "none",
  borderRadius: 3,
  overflow: "scroll-y",
};

export default function ProfileModal({ open, handleClose }) {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: auth.user?.firstName || "",
      lastName: auth.user?.lastName || "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(updateProfileAction(values));
    },
  });
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-">
              <div className="flex items-center space-x-3">
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
                <p>Edit Profile</p>
              </div>
              <Button type="submit">Save</Button>
            </div>
            <div>
              <div className="h-[15rem]">
                <img
                  className="w-full h-full rounded-md object-cover"
                  src="https://cdn.pixabay.com/photo/2023/01/13/14/58/snake-7716269_640.jpg"
                  alt=""
                />
              </div>

              <div className="pl-5">
                <Avatar
                  className="transform -translate-y-24"
                  sx={{ width: "10rem", height: "10rem" }}
                  src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg"
                />
              </div>
              <div className="space-y-3">
                <TextField
                  fullWidth
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  label="First Name"
                  id="firstName"
                />
                <TextField
                  fullWidth
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  id="lastName"
                  label="Last Name"
                />
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
