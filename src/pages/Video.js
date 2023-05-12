// coded by santosh
import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import "./Video.css";
import Comments from "../components/Comments";
import Card from "../components/Card";


function Video() {
  return (
    <div className="videoContainer">
      {/* Content */}
      <div className="content">
        <div className="iframe">
          <iframe
            width="100%"
            height="540"
            src="https://www.youtube.com/embed/jnnj6Fd2ym0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        {/* Video Details */}
        <h1 className="text-lg font-normal mt-5 mb-2">Test Video</h1>
        <div className="flex items-center justify-between  py-2">
          <p className="text-[#aaaaaa]">7,948,154 views • May 12, 2023</p>
          <div className="buttons">
            <button>
              <ThumbUpOutlinedIcon /> 1.2M
            </button>
            <button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </button>
            <button>
              <ReplyOutlinedIcon /> Share
            </button>
            <button>
              <AddTaskOutlinedIcon /> Save
            </button>
          </div>
        </div>
          <hr />
        {/* Channel Details */}
        <div className="channel">
          <div className="channelInfo">
            <img src="https://fabceleby.in/wp-content/uploads/2022/12/Sandeep-Maheshwari-Net-Worth.jpg" alt="" />
            <div className="channelDetails">
              <h1 className="font-medium">Sandeep Maheshwari</h1>
              <h4 className="mt-1 mb-5 text-sm text-[#aaaaaa]">27.5M subscribers</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                necessitatibus laborum sed vel nobis esse eius, commodi sint
                saepe ratione repudiandae non error eligendi dolore
                exercitationem architecto aspernatur quis. Nesciunt....
              </p>
            </div>
          </div>
          <button>Subscribe</button>
        </div>
        <hr />
        {/* comments Sections */}
        <Comments/>
      </div>

        {/* Recommendation Section */}
      <div className="recommend">
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        
      </div>
    </div>
  );
}

export default Video;
