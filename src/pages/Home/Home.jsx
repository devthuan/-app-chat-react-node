import React, { useState, useEffect, useRef } from "react";
import Avatar from "../../assets/images/IMG-20221018-WA0092 1.png";
import Background from "../../assets/images/background 1.jpg";
import ClipIcon from "../../assets/images/clip 1.png";
import MicrophoneIcon from "../../assets/images/microphone 1.png";
import PaymentIcon from "../../assets/images/payment 1.png";
import EmojiIcon from "../../assets/images/emoji 1.png";
import CameraIcon from "../../assets/images/camera 1.png";
import PhoneIcon from "../../assets/images/icons8-add-phone-90 5.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addMessage } from "../../redux/messageSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { id } = useParams() || 0;
  const listFriends = useSelector((state) => state.friends.data);
  let nameChat = listFriends.find((item) => item.id === parseInt(id));

  const dataMessage = useSelector((state) => state.messages.data);

  const [message, setMessage] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    dispatch(
      addMessage({
        id: parseInt(id),
        from: "me",
        message: message,
      })
    );

    // setDataMessage((prevMessage) => [
    //   ...prevMessage,
    //   {
    //     from: "me",
    //     message: message,
    //   },
    // ]);
  };

  const chatContainerRef = useRef();

  useEffect(() => {
    // Scroll to the bottom of the chat container
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [dataMessage]);

  return (
    <div className="flex flex-col max-h-screen ">
      <div className="Frame4 w-[990px] min-h-24 h-24 relative">
        <div className="Rectangle6 w-[990px] h-24 left-0 top-0 absolute bg-stone-900" />
        <div className="MaskGroup w-[47.14px] h-[49px] left-[20px] top-[22px] absolute">
          <div className="Ellipse2 w-[47.14px] h-[49px] left-0 top-0 absolute bg-black rounded-full shadow border-2 border-black" />
          <img
            className="Img20221018Wa00921 rounded-[180px]  absolute"
            src={nameChat ? nameChat.avatar : ""}
          />
        </div>
        <div className="DarshanZalavadiya left-[86px] top-[24px] absolute text-white text-xl font-semibold font-['Inter']">
          {nameChat ? nameChat.name: " "}
        </div>
        <div className="Online left-[86px] top-[50px] absolute text-green-500 text-opacity-95 text-xl font-semibold font-['Inter']">
          Online
        </div>
        <img
          className="Icons8AddPhone905 w-[46px] h-[46px] left-[900px] top-[20px] absolute"
          src={PhoneIcon}
        />
      </div>

      <div className="box__chat w-[990px]   h-screen  bg-stone-900  relative">
        <img
          className="Img20221018Wa00921  h-full    absolute"
          src={Background}
        />
        <div
          className=" w-[990px] h-[650px] overflow-y-auto  relative"
          ref={chatContainerRef}
        >
          <div className="time w-full h-[50px]   ">
            <div className="Today930Am left-[398px] absolute mt-[10px] text-white text-opacity-80 text-xl font-semibold font-['Inter']">
              Today, 9:30 am
            </div>
          </div>

          {dataMessage &&
            dataMessage.length > 0 &&
            dataMessage.map((item, index) => {
              if (item.id === parseInt(id)) {
                return item.from === "me" ? (
                  <div
                    key={index}
                    className="me__send w-full h-auto mb-[10px] flex justify-end   "
                  >
                    <div className="HelloDarshan px-[20px]  h-auto    ">
                      <div className="Rectangle9 px-[20px]  max-w-[300px] text-start break-words h-auto bg-zinc-800 rounded-[30px] text-white text-xl font-semibold font-['Inter']  leading-[41px]">
                        {item.message}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="you_send w-full h-auto mb-[18px]  "
                  >
                    <div className="w-auto flex gap-[10px] justify-start items-center ">
                      <div className="MaskGroup w-[47.14px] h-[49px]   ">
                        <img
                          className="Img20221018Wa00921 rounded-[180px]  "
                          src={Avatar}
                        />
                      </div>

                      <div className="Hello h-auto   ">
                        <div className="Rectangle9 px-[20px]  max-w-[300px] text-start break-words  bg-zinc-800 rounded-[30px]  leading-[38px] text-white text-xl font-semibold font-['Inter']">
                          {item.message}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>

        <form onSubmit={(e) => handleSubmit(e)} action="">
          <div className="Group2 w-[849px] h-[59px] left-[28px] bottom-[20px] absolute">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message..."
              type="text"
              className="Rectangle10 w-[849px] h-[59px] pl-[80px] pr-[190px]  bg-zinc-800 rounded-[30px]  text-white text-xl font-semibold font-['Inter']"
            />
            <img
              className="Emoji1 w-11 h-10 left-[12px] top-[10px] absolute"
              src={EmojiIcon}
            />
            <img
              className="Clip1 w-[41px] h-9 left-[687px] top-[12px] absolute"
              src={ClipIcon}
            />
            <img
              className="Payment1 w-[30px] h-[30px] left-[740px] top-[15px] absolute"
              src={PaymentIcon}
            />
            <img
              className="Camera1 w-[30px] h-[30px] left-[791px] top-[15px] absolute"
              src={CameraIcon}
            />
          </div>
        </form>

        <div className="Group1 w-[60px] h-[60px] left-[893px] bottom-[20px] absolute">
          <div className="Ellipse6 w-[60px] h-[60px] left-0 top-0 absolute bg-zinc-800 rounded-full" />
          <img
            className="Microphone1 w-[30px] h-[30px] left-[15px] top-[15px] absolute"
            src={MicrophoneIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
