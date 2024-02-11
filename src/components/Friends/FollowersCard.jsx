import React from "react";
import { Link } from "react-router-dom";
import { LiaEditSolid } from "react-icons/lia";
import {
  BsBriefcase,
  BsFacebook,
  BsInstagram,
  BsPersonFillAdd,
} from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import moment from "moment";
import FriendCard from "./FriendCard";

const FollowersCard = ({ friends }) => {
  return (
    <div>
      <div className="w-full bg-primary flex flex-col items-center shadow-sm rounded-xl px-6 py-4 ">
        <div className="w-full flex items-center justify-between border-b pb-5 border-[#66666645]">
          <h1 className="text-ascent-1 text-xl font-semibold">Friends</h1>
          <p className="text-ascent-1 text-lg font-semibold">
            {friends?.length}
          </p>
        </div>

        <div className="w-full flex flex-col gap-2 py-4">
          {friends.map((friend) => (
            <FriendCard
              key={friend._id}
              firstName={friend.firstName}
              lastName={friend.lastName}
              email={friend.email}
              friendRequest="accepted"
              id={friend._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowersCard;
