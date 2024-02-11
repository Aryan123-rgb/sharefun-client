import React from "react";
import FriendCard from "./FriendCard";

const FriendRequestCard = ({ friendRequest }) => {
  return (
    <div>
      <div className="w-full bg-primary flex flex-col items-center shadow-sm rounded-xl px-6 py-4 ">
        <div className="w-full flex items-center justify-between border-b pb-5 border-[#66666645]">
          <h1 className="text-ascent-1 text-xl font-semibold">
            Friend Requests
          </h1>
          <p className="text-ascent-1 text-lg font-semibold">
            {friendRequest?.length}
          </p>
        </div>

        <div className="w-full flex flex-col gap-2 py-4">
          {friendRequest.map((friend) => (
            <FriendCard
              key={friend._id}
              firstName={friend.firstName}
              lastName={friend.lastName}
              email={friend.email}
              friendRequest="sent"
              id={friend._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendRequestCard;
