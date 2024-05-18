import { Grid } from "@mui/material";
import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Reels from "../../components/reels/Reels";
import CreateReelsForm from "../../components/reels/CreateReelsForm";
import Profile from "../profile/Profile";
import MiddlePart from "../../components/middlepart/MiddlePart";
import Homeright from "../../components/homeright/Homeright";

const HomePage = () => {
  const location = useLocation();
  return (
    <div className="px-20">
      <Grid container spacing={0}>
        <Grid item xs={0} lg={3}>
          <div className="sticky top-0">
            <SideBar />
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          lg={location.pathname === "/" ? 6 : 9}
          className="px-5 flex justify-center"
        >
          <Routes>
            <Route path="/" element={<MiddlePart />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/create-reels" element={<CreateReelsForm />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Grid>
        <Grid item xs={0} lg={3}>
          <div className="sticky top-0">
            <Homeright />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
