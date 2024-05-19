import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/post/PostCard";
import UserReelCard from "../../components/reels/UserReelCard";
import { useSelector } from "react-redux";
import ProfileModal from "./ProfileModal";
const tabs = [
  {
    value: "post",
    label: "Posts",
  },
  {
    value: "reels",
    label: "Reels",
  },
  {
    value: "saved",
    label: "Saved",
  },
  {
    value: "repost",
    label: "Repost",
  },
];

const dpost = [1, 1, 1, 1, 1, 1];
const savedposts = [1, 1, 1];

const reelsUser = [1, 1, 1, 1, 1];

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id } = useParams();
  const [value, setValue] = React.useState("post");

  const { auth } = useSelector((store) => store);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card className="py-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="h-full w-full object-cover rounded-t-md"
            src="https://cdn.pixabay.com/photo/2023/01/13/14/58/snake-7716269_640.jpg"
            alt=""
          />
        </div>

        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ height: "10rem", width: "10rem" }}
            src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg"
          />

          {true ? (
            <Button
              sx={{ borderRadius: "20px" }}
              variant="contained"
              color="primary"
              onClick={handleOpenProfileModal}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              sx={{ borderRadius: "20px" }}
              variant="contained"
              color="primary"
            >
              Follow
            </Button>
          )}
        </div>

        <div className="p-5">
          <div>
            <h1 className="text-xl font-bold">
              {auth.user.firstName + " " + auth.user.lastName}
            </h1>
            <p className="text-gray-500">
              {"@" + auth?.user?.firstName + "_" + auth?.user?.lastName}
            </p>
          </div>

          <div className="flex gap-3">
            <span>{auth?.user.following.length} posts</span>
            <span>{auth?.user.followers.length} followers</span>
            <span>{auth?.user.following.length} following</span>
          </div>
          <div className="mt-2">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
              perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Odio, accusamus?
            </p>
          </div>
        </div>

        <section>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} value={tab.value} label={tab.label} />
              ))}
            </Tabs>
          </Box>

          <div className="flex justify-center">
            {value === "post" ? (
              <div className="space-y-5  w-[70%] my-10">
                {dpost.map((item) => (
                  <div className="border border-slate-500">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-center">
            {value === "saved" ? (
              <div className="space-y-5  w-[70%] my-10">
                {savedposts.map((item) => (
                  <div className="border border-slate-500">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-center">
            {value === "reels" ? (
              <div className="space-y-5  w-[70%] my-10">
                {reelsUser.map((item) => (
                  <div className="border border-slate-500">
                    <UserReelCard />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-center">
            {value === "repost" ? (
              <div className="space-y-5  w-[70%] my-10">
                {reelsUser.map((item) => (
                  <div className="border border-slate-500">
                    <UserReelCard />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
      </div>

      <section>
        <ProfileModal open={open} handleClose={handleClose} />
      </section>
    </Card>
  );
};

export default Profile;
