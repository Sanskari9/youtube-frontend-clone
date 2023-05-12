// coded by santosh
import React from 'react'
import Logo from "../assests/logo.png"
import Option from "./Option"
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-[15%] bg-[#202020] h-screen text-white py-[18px] px-[26px] text-md sticky top-0">
      {/* youtube logo */}
      <Link to="/">
      <div className="flex items-center font-bold mb-2">
        <img src={Logo} alt="" width={30} />
        <h1 className="pl-2 text-lg">YOUTUBE</h1>
      </div>
      </Link>

      {/* Sidebar Options */}
      <div>
      <Option Icon={HomeIcon} title="Home"/>
      <Option Icon={ExploreOutlinedIcon} title="Explore"/>
      <Option Icon={SubscriptionsOutlinedIcon} title="Subscriptions"/>
      <hr />
      <Option Icon={VideoLibraryOutlinedIcon} title="Library"/>
      <Option Icon={HistoryOutlinedIcon} title="History"/>
      <hr />
      <Option Icon={LibraryMusicOutlinedIcon} title="Music"/>
      <Option Icon={SportsBasketballOutlinedIcon} title="Sports"/>
      <Option Icon={SportsEsportsOutlinedIcon} title="Gaming"/>
      <Option Icon={MovieOutlinedIcon} title="Movies"/>
      <Option Icon={ArticleOutlinedIcon} title="News"/>
      <Option Icon={LiveTvOutlinedIcon} title="Live"/>
      <hr />
      <Option Icon={SettingsOutlinedIcon} title="Settings"/>
      <Option Icon={FlagOutlinedIcon} title="Report"/>
      <Option Icon={HelpOutlineOutlinedIcon} title="Help"/>
      </div>

    </div>
  )
}

export default Sidebar
