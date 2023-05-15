//      code by rajmal varma 

import React from 'react'
import { Link } from 'react-router-dom'

function Card({type}) {
  const container = {
    width: type !== "sm" && "360px",
    marginBottom: type === "sm" ? "10px" : "45px",
    cursor: "pointer",
    display: type === "sm" && "flex",
    gap: "10px"
  };

  const imageStyle = {
    width: "100%",
    height: type === "sm" ? "120px" : "202px",
    backgroundColor: "#999",
    flex: 1,
  };

  const detailsStyle = {
    display: "flex",
    marginTop: type !== "sm" && "16px",
    gap: "12px",
    flex: 1,
  };
  const channelImageStyle = {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "#999",
    display: type === "sm" && "none"
  };

  return (
    <Link to="/video/test">
    <div style={container} type={type}>
      <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*IInvPEffuwYfazsXnKO7iA.png" alt="" style={imageStyle} type={type}/>
      <div style={detailsStyle} type={type}>
       <img src="https://allfreemockups.com/wp-content/uploads/2021/01/Screen-Shot-2021-01-23-at-4.06.29-PM.jpg" alt="" style={channelImageStyle} type={type}/>
       <div>
        <h2 className="text-lg font-medium text-white">Test Video</h2>
        <h4 className="text-sm font-medium my-2 text-[#aaaaaa]">Youtube</h4>
        <p className="text-[14px] font-medium text-[#aaaaaa]">690,880 views • 1 day ago</p>
       </div>
      </div>
    </div>
    </Link>
  )
}


export default Card
