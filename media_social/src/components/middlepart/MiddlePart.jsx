import { Avatar, Card, IconButton } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from "@mui/icons-material/Image";
import ArticleIcon from "@mui/icons-material/Article";
import VideocamIcon from "@mui/icons-material/Videocam";
import PostCard from "../post/PostCard";
const story = [1, 1, 1, 1, 1];
const posts = [1, 1, 0, 1, 1, 1, 1];
const MiddlePart = () => {
  const handlePostCreateModel = (e) => {
    console.log("Post Create Model");
  };
  return (
    <div className="px-20">
      <section className="p-5 flex items-center rounded-b-md ">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar sx={{ width: "5rem", height: "5rem" }}>
            <AddIcon sx={{ fontSize: "3rem" }}></AddIcon>
          </Avatar>
          <p>New</p>
        </div>
        {story.map((item, index) => (
          <StoryCircle />
        ))}
      </section>
      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar />
          <input
            type="text"
            className="outline-none w-[90%] rounded-full px-5 bg-transparent bg-slate-100 border-[#3b4054]"
          />
        </div>

        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center">
            <IconButton>
              <ImageIcon color="primary" onClick={handlePostCreateModel} />
            </IconButton>
            <span>media</span>
          </div>
          <div className="flex items-center">
            <IconButton>
              <ArticleIcon color="primary" onClick={handlePostCreateModel} />
            </IconButton>
            <span>media</span>
          </div>
          <div className="flex items-center">
            <IconButton>
              <VideocamIcon color="primary" onClick={handlePostCreateModel} />
            </IconButton>
            <span>media</span>
          </div>
        </div>
      </Card>
      <div className="mt-5 space-y-5">
        {posts.map((item) => (
          <PostCard />
        ))}
      </div>
    </div>
  );
};

export default MiddlePart;
