import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  IconButton,
} from "@mui/material";
import React from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const UserReelCard = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <video
        className="w-full h-[27rem] object-cover"
        controls
        src="https://media.istockphoto.com/id/1455772765/video/waterfall-with-fresh-water-in-the-romantic-and-idyllic-tropical-jungle-rainforest-blue.mp4?s=mp4-640x640-is&k=20&c=-ufHs0M4TG0HCyntsf3RwpHP08EEtAlSv8APcZe6Ciw="
      />
      <CardActions disableSpacing className="flex justify-between">
        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton>
            <ChatBubbleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            {true ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};

export default UserReelCard;
