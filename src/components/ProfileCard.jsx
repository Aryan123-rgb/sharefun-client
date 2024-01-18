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

const ProfileCard = () => {
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
      <div className='w-full bg-primary flex flex-col items-center shadow-sm rounded-xl px-6 py-4 '>
        <div className='w-full flex items-center justify-between border-b pb-5 border-[#66666645]'>
          <Link to={"/profile/" + dummyUserDetails._id} className='flex gap-2'>
            <img
              src={dummyUserDetails.profileUrl}
              alt={dummyUserDetails.email}
              className='w-14 h-14 object-cover rounded-full'
            />

            <div className='flex flex-col justify-center'>
              <p className='text-lg font-medium text-ascent-1'>
                {dummyUserDetails.firstName} {dummyUserDetails.lastName}
              </p>
              <span className='text-ascent-2'>
                {dummyUserDetails.profession ?? "No Profession"}
              </span>
            </div>
          </Link>

          <div className=''>
            <LiaEditSolid
              size={22}
              className='text-blue cursor-pointer'
            />
          </div>
        </div>

        <div className='w-full flex flex-col gap-2 py-4 border-b border-[#66666645]'>
          <div className='flex gap-2 items-center text-ascent-2'>
            <CiLocationOn className='text-xl text-ascent-1' />
            <span>{dummyUserDetails.location ?? "Add Location"}</span>
          </div>

          <div className='flex gap-2 items-center text-ascent-2'>
            <BsBriefcase className=' text-lg text-ascent-1' />
            <span>{dummyUserDetails.profession ?? "Add Profession"}</span>
          </div>
        </div>

        <div className='w-full flex flex-col gap-2 py-4 border-b border-[#66666645]'>
          <p className='text-xl text-ascent-1 font-semibold'>
            {dummyUserDetails.friends?.length} Friends
          </p>

          <div className='flex items-center justify-between'>
            <span className='text-ascent-2'>Who viewed your profile</span>
            <span className='text-ascent-1 text-lg'>
              {dummyUserDetails.views?.length}
            </span>
          </div>

          <span className='text-base text-blue'>
            {dummyUserDetails.verified ? "Verified Account" : "Not Verified"}
          </span>

          <div className='flex items-center justify-between'>
            <span className='text-ascent-2'>Joined</span>
            <span className='text-ascent-1 text-base'>
              {moment(dummyUserDetails.createdAt).fromNow()}
            </span>
          </div>
        </div>

        <div className='w-full flex flex-col gap-4 py-4 pb-6'>
          <p className='text-ascent-1 text-lg font-semibold'>Social Profile</p>

          <div className='flex gap-2 items-center text-ascent-2'>
            <BsInstagram className=' text-xl text-ascent-1' />
            <span>{dummySocialDetails.instagram}</span>
          </div>
          <div className='flex gap-2 items-center text-ascent-2'>
            <FaTwitterSquare className=' text-xl text-ascent-1' />
            <span>{dummySocialDetails.twitter}</span>
          </div>
          <div className='flex gap-2 items-center text-ascent-2'>
            <BsFacebook className=' text-xl text-ascent-1' />
            <span>{dummySocialDetails.facebook}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
