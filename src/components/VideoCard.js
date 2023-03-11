import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoVideoUrl,
  demoChannelUrl,
  demoVideoTitle,
  demoThumbnailUrl,
  demoChannelTitle,
} from "../utils/constants";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        backgroundColor: "#1e1e1e",
        width: { xs: "100%", md: "300px" },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: { xs: "100%", sm: "358px" },
            height: 180,
            borderRadius: "10px 10px 0px 0px",
          }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: "#181818",
          height: "106px",
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="grey"
            sx={{ display: "flex" }}
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle
              sx={{
                fontSize: "12",
                color: "grey",
                ml: "5px",
                width: "15px",
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
