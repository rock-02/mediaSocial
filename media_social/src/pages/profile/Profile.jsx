import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/post/PostCard";
import { useDispatch, useSelector } from "react-redux";
import ProfileModal from "./ProfileModal";
import { api } from "../../config/api";

const tabs = [
  { value: "post", label: "Posts" },
  { value: "reels", label: "Reels" },
  { value: "saved", label: "Saved" },
];

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const { auth } = useSelector((store) => store);
  const [value, setValue] = useState("post");
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const [savedPosts, setSavedPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getUser = async () => {
    const { data } = await api.get(`/api/users/${id}`);
    setUser(data);
    setFollowersCount(data.followers.length);
    setFollowingCount(data.following.length);
    setIsFollowing(auth.user?.following?.includes(data.id));
  };
  useEffect(() => {
    getUser();
  }, [id, auth.user]);

  const getSavedPosts = async () => {
    const { data } = await api.get("/posts/savedposts");
    setSavedPosts(data);
  };
  useEffect(() => {
    getSavedPosts();
  }, []);

  const getUserPosts = async () => {
    const { data } = await api.get(`/api/posts/users/${id}`);
    setUserPosts(data);
  };
  useEffect(() => {
    getUserPosts();
  }, [id]);

  const handleFollow = async () => {
    const { data } = await api.get(`/api/users/follow/${user.id}`);
    setIsFollowing(!isFollowing);
    getUser();
  };

  return (
    <Card className="py-10 w-[70%]">
      {user && (
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

            {auth.user.id === id ? (
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
                onClick={handleFollow}
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
            )}
          </div>

          <div className="p-5">
            <div>
              <h1 className="text-xl font-bold">
                {auth.user.id === id
                  ? `${auth.user.firstName} ${auth.user.lastName}`
                  : `${user.firstName} ${user.lastName}`}
              </h1>
              <p className="text-gray-500">
                {auth.user.id === id
                  ? `${"@" + auth.user.firstName} ${auth.user.lastName + "_"}`
                  : `${"@" + user.firstName + "_"} ${user.lastName}`}
              </p>
            </div>

            <div className="flex gap-3">
              <span>{userPosts.length} posts</span>
              {auth.user.id === id && <span>{followersCount} followers</span>}
              {auth.user.id === id && <span>{followingCount} following</span>}
            </div>
            <div className="mt-2">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi, perspiciatis Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Odio, accusamus?
              </p>
            </div>
          </div>
        </div>
      )}

      <section>
        <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="profile tabs">
            {tabs.map((tab) =>
              // Render "Saved" tab if user is authenticated or if the profile belongs to the authenticated user
              tab.value === "saved" &&
              (auth.user.id === id || auth.user.id === user?.id) ? (
                <Tab key={tab.value} value={tab.value} label={tab.label} />
              ) : (
                // Otherwise, render other tabs
                <Tab key={tab.value} value={tab.value} label={tab.label} />
              )
            )}
          </Tabs>
        </Box>

        <div className="flex justify-center">
          {value === "post" && (
            <div className="space-y-5 w-[70%] my-10">
              {userPosts.map((item) => (
                <PostCard key={item.postId} item={item} />
              ))}
            </div>
          )}
          {value === "saved" && (
            <div className="space-y-5 w-[70%] my-10">
              {savedPosts.map((item) => (
                <PostCard key={item.postId} item={item} />
              ))}
            </div>
          )}
          {value === "reels" && (
            <div className="space-y-5 w-[70%] my-10">
              {/* Add UserReelCard components here if needed */}
            </div>
          )}
        </div>
      </section>

      <section>
        <ProfileModal open={open} handleClose={handleClose} />
      </section>
    </Card>
  );
};

export default Profile;
