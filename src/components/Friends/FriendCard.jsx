import React from "react";
import { FaUserPlus } from "react-icons/fa";
import CustomButton from "../Reusable-components/CustomButton";

function FriendCard() {
  // Dummy data
  const userData = {
    name: "John Doe",
    profession: "Web Developer",
    profileImage:
      "https://www.codewithantonio.com/_next/image?url=%2Flogo2.png&w=48&q=75",
    friendRequestSent: true,
  };

  return (
    <div className="flex items-center rounded-lg">
      {/* User Profile Image */}

      <div className="flex items-center space-x-4">
        <img
          src={userData.profileImage}
          alt={userData.name}
          className="rounded-full w-12 h-12 object-cover"
        />

        <div className="flex flex-col">
          {/* User Name */}
          <span className="font-bold text-ascent-1 text-lg">
            {userData.name}
          </span>

          {/* User Profession */}
          <span className="text-gray-500">{userData.profession}</span>
        </div>
      </div>

      {/* Friend Request Button */}
      {/* {userData.friendRequestSent ? (
        <div className="flex ml-auto space-x-4 items-center">
          <CustomButton
            title="Accept"
            containerStyles="bg-[#0444a4] text-white py-1 px-2 rounded-full font-semibold text-sm"
          />
          <CustomButton
            title="Deny"
            containerStyles="text-ascent-2 border border-[text-ascent-1] py-1 px-2 rounded-full font-semibold text-sm"
          />
        </div>
      ) : (
        <button
          className="ml-auto rounded-full"
          // Add onClick handler for sending friend request
        >
          <FaUserPlus className="mr-2 text-ascent-2" />
        </button>
      )} */}
      {/* <button
        className="ml-auto follow-button text-lg px-3 py-1 rounded-full font-[450]"
        // Add onClick handler for sending friend request
      >
        Follow
      </button> */}
      <button
        className="ml-auto unfollow-button text-lg px-4 py-1 rounded-full "
        // Add onClick handler for sending friend request
      >
        Following
      </button>
    </div>
  );
}

export default FriendCard;
