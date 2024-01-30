import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { BiComment, BiLike, BiSolidLike } from "react-icons/bi";
import { useDispatch } from "react-redux";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const [showAll, setShowAll] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const user = post?.userId;

  return (
    <div className="mb-2 bg-primary md:max-w-3xl p-4 rounded-xl">
      {/* User Information */}
      <div className="flex gap-3 items-center mb-1">
        <Link to={"/profile/"}>
          <img
            src={"https://via.placeholder.com/50"}
            alt={"User Profile"}
            className="w-14 h-14 object-cover rounded-full"
          />
        </Link>
        <div className="w-full flex justify-between">
          <Link to={"/profile/"}>
            <p className="font-medium text-lg text-ascent-1">
              {user?.firstName + " " + user?.lastName}
            </p>
            <span className="text-ascent-2">Location</span>
          </Link>
          <span className="text-ascent-2 text-sm">
            {moment("2023-05-25").fromNow()}
          </span>
        </div>
      </div>

      {/* Post Content */}
      <div>
        <p className="text-ascent-2">
          {showAll
            ? post?.description
            : post?.description?.length > 100
            ? `${post?.description?.slice(0, 100)}...`
            : post?.description}

          {post?.description?.length > 100 && (
            <span
              className="text-blue ml-2 font-medium cursor-pointer"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </span>
          )}
        </p>

        {post?.image && (
          <img
            src={post?.image}
            alt="Post Image"
            className=" mt-2 rounded-lg"
          />
        )}
      </div>

      {/* Post Interaction */}
      <div className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]">
        <p className="flex gap-2 items-center text-base cursor-pointer">
          <BiLike size={20} />
          15 Likes
        </p>
        <p
          className="flex gap-2 items-center text-base cursor-pointer"
          onClick={() => setShowComments(!showComments)}
        >
          <BiComment size={20} />5 Comments
        </p>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="w-full mt-4 border-t border-[#66666645] pt-4 ">
          {/* Comment Form */}
          <div className="w-full flex items-center gap-2 py-4">
            <img
              src={"https://via.placeholder.com/50"}
              alt="User Image"
              className="w-10 h-10 rounded-full object-cover"
            />
            <textarea
              className="w-full rounded-full py-3"
              placeholder="Write a comment..."
              rows={3}
            ></textarea>
          </div>
          {/* Comments */}
          <div className="w-full py-2">
            {/* Single Comment */}
            <div className="flex gap-3 items-center mb-1">
              <img
                src="https://via.placeholder.com/50"
                alt="User Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-base text-ascent-1">John Doe</p>
                <span className="text-ascent-2 text-sm">2 hours ago</span>
              </div>
            </div>
            <p className="text-ascent-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
