import React from "react";

import Logo from "../../../../assets/images/png logo 1.png";
import HomeIcon from "../../../../assets/images/home 1.png";
import SearchIcon from "../../../../assets/images/search (2) 1.png";
import SaveIcon from "../../../../assets/images/save 1.png";
import SettingIcon from "../../../../assets/images/setting (5) 1.png";
import LightIcon from "../../../../assets/images/bright-mode 1.png";
import DarkIcon from "../../../../assets/images/night-mode (2) 1.png";
import ShareIcon from "../../../../assets/images/share (1) 1.png";
import Avatar from "../../../../assets/images/IMG-20221018-WA0092 1.png";


const Navbar = () => {
  return (
    <div className=" Frame2 w-[68px] h-full relative">
      <div className="DLogo w-11 h-[42.81px] left-[10px] top-[47px] absolute">
        <div className="Ellipse1 w-11 h-[42.81px] left-0 top-0 absolute mix-blend-hard-light bg-black rounded-full border-2 border-black" />
        <img
          className="PngLogo1 w-[63.03px] h-[47.57px]  top-[-3px] absolute"
          src={Logo}
        />
      </div>

      <div className="Home left-[17px] top-[195px] absolute text-slate-600 text-sm font-bold font-['Inter']">
        Home
      </div>
      <img
        className="Home1 w-[35px] h-[35px] left-[17px] top-[154px] absolute"
        src={HomeIcon}
      />

      <img
        className="Search21 w-[34px] h-[34px] left-[18px] top-[229px] absolute"
        src={SearchIcon}
      />
      <div className="Search left-[15px] top-[271px] absolute text-white text-sm font-normal font-['Inter']">
        Search
      </div>

      <img
        className="Save1 w-[35px] h-[35px] left-[17px] top-[305px] absolute"
        src={SaveIcon}
      />
      <div className="Save left-[21px] top-[346px] absolute text-white text-sm font-normal font-['Inter']">
        Save
      </div>

      <img
        className="Setting51 w-[34px] h-[34px] left-[18px] top-[384px] absolute"
        src={ShareIcon}
      />
      <div className="Share left-[18px] top-[430px] absolute text-white text-sm font-normal font-['Inter']">
        Share
      </div>

      <img
        className="Setting51 w-[34px] h-[34px] left-[18px] top-[464px] absolute"
        src={SettingIcon}
      />
      <div className="Setting left-[14px] top-[504px] absolute text-white text-sm font-normal font-['Inter']">
        Setting
      </div>

      <div className="NightMood w-[43px] h-[85px] left-[11px] top-[572px] absolute">
        <div className="Rectangle2 w-[43px] h-[85px] left-0 top-0 absolute bg-black bg-opacity-90 rounded-[100px]" />
        <div className="Rectangle3 w-[38.87px] h-[45.28px] left-[2.48px] top-[36.54px] absolute bg-zinc-800 bg-opacity-90 rounded-[100px]" />
        <img
          className="NightMode21 w-[23.60px] h-[21.99px] left-[9.92px] top-[48.19px] absolute"
          src={DarkIcon}
        />
        <img
          className="BrightMode1 w-[28.12px] h-[27.01px] left-[7.44px] top-[6.36px] absolute"
          src={LightIcon}
        />
      </div>

      <div className="MaskGroup w-[46px] h-[46.32px] left-[11px] top-[747px] absolute">
        <div className="Ellipse2 w-[46px] h-[46.32px] left-0 top-0 absolute bg-black rounded-full shadow border-2 border-black" />
        <img
          className="Img20221018Wa00921 rounded-[180px]  absolute"
          src={Avatar}
        />
      </div>
    </div>
  );
};

export default Navbar;
