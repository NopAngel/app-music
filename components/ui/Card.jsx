import React from "react";
import { FaPlay } from "react-icons/fa6";

export default function Card({
  Title,
  Image,
  CreatedAt,
  Artist,
  ArtistImg,
  KeyCard,
}) {
  return (
    <div
      className="sm:w-[300px] w-full bg-neutral-950/55 rounded-xl m-3 group"
      key={KeyCard}
    >
      <div className="group-hover:bg-green-500 p-2 xl:size-[35px] size-[100px] flex justify-center items-center xl:text-xl text-3xl rounded-full absolute opacity-0 group-hover:opacity-100 translate-x-60 translate-y-56 transition-all duration-150 group-hover:translate-y-[260px]">
        <FaPlay className="text-black flex justify-center cursor-pointer" />
      </div>
      <img
        src={Image}
        alt={Title}
        className="w-[90%] mx-auto rounded-2xl shadow-md"
      />
      <div className="p-2 text-center">
        <h1 className="text-3xl font-semibold p-2">{Title}</h1>
        <div className="flex justify-between opacity-50 text-xs items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-[35px] rounded-full" src={ArtistImg} alt="" />
            <p className="text-blue-700 ">@{Artist}</p>
          </div>
          <div>
            <p>{CreatedAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
