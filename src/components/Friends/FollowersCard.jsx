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

const FollowersCard = () => {
  // Static dummy data
  const dummyUser = {
    _id: "123",
    firstName: "John",
    lastName: "Doe",
    profileUrl: "",
    email: "john.doe@example.com",
    profession: "Web Developer",
    location: "New York, USA",
    friends: ["friend1", "friend2", "friend3"],
    views: ["view1", "view2", "view3"],
    verified: true,
    createdAt: new Date().toISOString(),
  };

  const dummySocialProfiles = {
    instagram: "john.doe.instagram",
    twitter: "john_doe_twitter",
    facebook: "john.doe.facebook",
  };

  const dummyUserDetails = dummyUser;
  const dummySocialDetails = dummySocialProfiles;

  return (
    <div>
      <div className="w-full bg-primary flex flex-col items-center shadow-sm rounded-xl px-6 py-4 ">
        <div className="w-full flex items-center justify-between border-b pb-5 border-[#66666645]">
          <h1 className="text-ascent-1 text-xl font-semibold">
            Followers
          </h1>
          <p className="text-ascent-1 text-lg font-semibold">0</p>
        </div>

        <div className="w-full flex flex-col gap-2 py-4">
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
        </div>
      </div>
    </div>
  );
};

export default FollowersCard;
