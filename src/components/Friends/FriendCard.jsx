import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendFriendRequest } from "../../redux/slice/userSlice";

function FriendCard({ firstName, lastName, friendRequest, id, email }) {
  const dispatch = useDispatch();
  const [friendRequestStatus, setFriendRequestStatus] = useState(friendRequest);

  const userData = {
    name: `${firstName} ${lastName}`,
    profession: email?.split("@")[0],
    profileImage:
      "https://www.codewithantonio.com/_next/image?url=%2Flogo2.png&w=48&q=75",
  };

  const handleSendFriendRequest = async () => {
    try {
      const response = await dispatch(sendFriendRequest(id));
      console.log(response);
      setFriendRequestStatus("accepted");
    } catch (error) {
      console.log(error);
    }
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
      {friendRequestStatus === "sent" ? (
        <div className="flex ml-auto space-x-2 items-center">
          <button
            className="ml-auto unfollow-button transition text-lg px-2 py-0.5 rounded-full"
            onClick={() => setFriendRequestStatus("accepted")}
          >
            Accept
          </button>
          <button
            className="ml-auto unfollow-button transition text-lg px-4 py-1 rounded-full"
            onClick={() => setFriendRequestStatus("accepted")}
          >
            Deny
          </button>
        </div>
      ) : null}
      {friendRequestStatus === "rejected" ? (
        <button
          className="ml-auto unfollow-button transition text-lg px-4 py-1 rounded-full"
          onClick={() => handleSendFriendRequest()}
        >
          Follow
        </button>
      ) : null}
      {friendRequestStatus === "accepted" ? (
        <button
          className={`ml-auto unfollow-button transition text-lg px-4 py-1 rounded-full`}
          onClick={() => setFriendRequestStatus("rejected")}
        >
          Following
        </button>
      ) : null}
    </div>
  );
}

export default FriendCard;
