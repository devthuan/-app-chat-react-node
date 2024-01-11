import React, { useState } from "react";
import SearchIcon from "../../../../assets/images/search (2) 1.png";
import FigmaImg from "../../../../assets/images/figma.png";
import PinIcon from "../../../../assets/images/pin 1.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Friend = () => {
  const [friend, setFriend] = useState("");

  const listFriends = useSelector((state) => state.friends.data);

  let handleChoseFriend = (item) => {
    setFriend(item);
  };

  return (
    <div className="Frame3 w-[321px] h-[537px] relative">
      <div className="Search w-[269px] h-[37px] left-[17px] top-[25px]  absolute">
        <div className="Rectangle7 w-[269px] h-[37px] left-0 top-0 absolute bg-stone-700 bg-opacity-50 rounded-[100px]" />
        <img
          className="Search22 w-5 h-5 left-[10px] top-[8px] absolute"
          src={SearchIcon}
        />
        <div className="Search left-[37px] top-[11px]  absolute text-white text-opacity-60 text-xs font-light font-['Inter']">
          Search.......
        </div>
      </div>

      <div className="Message left-[21px] top-[83px] absolute text-white text-xl font-semibold font-['Inter']">
        Message
      </div>
      <div className="Options origin-top-left  w-[43px] h-[255.72px] left-[276.72px] top-[118px] absolute">
        <div className="Rectangle2 w-[255.72px] h-[43px]  left-[-255.72px] top-0 absolute origin-top-left  bg-black bg-opacity-90 rounded-[100px]" />

        <div className="AllChats left-[-238.72px] top-[14px] absolute text-white text-xs font-semibold font-['Inter']">
          All Chats
        </div>
        <div className="Groups left-[-153.72px] top-[14px] absolute text-white text-xs font-semibold font-['Inter']">
          Groups
        </div>
        <div className="AllChats left-[-68.72px] top-[14px] absolute text-white text-xs font-semibold font-['Inter']">
          Contacts
        </div>
      </div>

      <div className="left-[13px] top-[170px] absolute ">
        <div className="Chate1 w-[300px] h-[79px] mb-[2px] relative ">
          <div className="Rectangle8 w-[300px] h-[70px] left-0 top-[9px] absolute bg-zinc-800 rounded-[10px]" />
          <div className="MaskGroup w-[51px] h-[53px] left-[13px] top-[8px] absolute">
            <img className="Image1 top-[10px] absolute" src={FigmaImg} />
          </div>
          <div className="Ellipse3 w-[15px] h-[15px] left-[55px] top-[17px] absolute bg-green-500 rounded-full" />
          <div className="Ellipse4 w-6 h-6 left-[261px] top-[32px] absolute bg-green-500 rounded-full" />
          <div className=" left-[269px] top-[37px] absolute text-black text-xs font-semibold font-['Inter']">
            2
          </div>
          <img
            className="Pin1 w-5 h-5 left-[277px] top-0 absolute"
            src={PinIcon}
          />
          <div className="FigmaTeams left-[80px] top-[27px] absolute text-white text-xs font-semibold font-['Inter']">
            Figma Teams
          </div>
          <div className="Typing left-[79px] top-[47px] absolute text-green-500 text-opacity-95 text-xs font-semibold font-['Inter']">
            Typing.......
          </div>
        </div>

        {listFriends &&
          listFriends.length > 0 &&
          listFriends.map((item, index) => (
            <NavLink key={index} to={`/${item.id}`}>
              <div
                onClick={() => handleChoseFriend(item)}
                className="Chate1 w-[300px] h-[79px] mb-[2px] relative "
              >
                <div className="Rectangle8 w-[300px] h-[70px] left-0 top-[9px] absolute bg-zinc-800 rounded-[10px]" />
                <div className="MaskGroup w-[51px] h-[53px] left-[13px] top-[8px] absolute">
                  <img
                    className="Image1 top-[10px]   absolute"
                    src={item.avatar}
                  />
                </div>
                <div className="Ellipse3 w-[15px] h-[15px] left-[55px] top-[17px] absolute bg-green-500 rounded-full" />

                <div className="FigmaTeams left-[80px] top-[15px] absolute text-white text-md font-semibold font-['Inter']">
                  {item.name}
                </div>
                <div className="Typing left-[79px] top-[44px] absolute text-[#767876] text-opacity-95 text-sm font-semibold font-['Inter']">
                  {item.lassMessage}
                </div>
              </div>
            </NavLink>
          ))}

        {/*
         <div className="Chate1 w-[300px] h-[79px] mb-[2px] relative ">
          <div className="Rectangle8 w-[300px] h-[70px] left-0 top-[9px] absolute bg-zinc-800 rounded-[10px]" />
          <div className="MaskGroup w-[51px] h-[53px] left-[13px] top-[8px] absolute">
            <img className="Image1 top-[10px]   absolute" src={FigmaImg} />
          </div>
          <div className="Ellipse3 w-[15px] h-[15px] left-[55px] top-[17px] absolute bg-green-500 rounded-full" />

          <div className="FigmaTeams left-[80px] top-[27px] absolute text-white text-xs font-semibold font-['Inter']">
            Figma Teams
          </div>
          <div className="Typing left-[79px] top-[47px] absolute text-[#767876] text-opacity-95 text-xs font-semibold font-['Inter']">
            Hello
          </div>
        </div>

        <div className="Chate1 w-[300px] h-[79px] mb-[2px] relative ">
          <div className="Rectangle8 w-[300px] h-[70px] left-0 top-[9px] absolute bg-zinc-800 rounded-[10px]" />
          <div className="MaskGroup w-[51px] h-[53px] left-[13px] top-[8px] absolute">
            <img className="Image1 top-[10px]   absolute" src={FigmaImg} />
          </div>

           // icon đang hoạt động 
            // <div className="Ellipse3 w-[15px] h-[15px] left-[55px] top-[17px] absolute bg-green-500 rounded-full" /> 

          <div className="FigmaTeams left-[80px] top-[27px] absolute text-white text-xs font-semibold font-['Inter']">
            Figma Teams
          </div>
          <div className="Typing left-[79px] top-[47px] absolute text-[#767876] text-opacity-95 text-xs font-semibold font-['Inter']">
            Hello
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Friend;
