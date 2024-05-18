import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/post/PostCard";
import UserReelCard from "../../components/reels/UserReelCard";
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
  const { id } = useParams();
  const [value, setValue] = React.useState("post");

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
            <h1 className="text-xl font-bold">John Doe</h1>
            <p className="text-gray-500">@Developer</p>
          </div>

          <div className="flex gap-3">
            <span>41 posts</span>
            <span>150 followers</span>
            <span>31 following</span>
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
    </Card>
  );
};

export default Profile;
