import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import { BsFiletypeGif, BsPersonFillAdd } from "react-icons/bs";
import { BiImages, BiSolidVideo } from "react-icons/bi";
import TextInput from "../components/TextInput";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getAllPosts } from "../redux/slice/postSlice";
import PostCard from "../components/PostCard";
import ProfileCard from "../components/ProfileCard";
import { showToast } from "../utils/toast";
import { useNavigate } from "react-router-dom";

function Home() {
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("shareFunUserId");
  const posts = useSelector((state) => state.postReduer?.posts?.data);

  console.log("post", posts);

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  });

  const uploadToCloudinary = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "sharefun");
      formData.append("cloud_name", "dgc95jwgz");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dgc95jwgz/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data?.secure_url;
      } else {
        console.log("Error uploading image");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    const previewURL = URL.createObjectURL(file);
    setPreviewImage(previewURL);
  };

  const handleSubmit = async () => {
    if (!description) {
      showToast("Description is required", "info");
      return;
    }

    let imageUrl = "";

    if (selectedFile) {
      imageUrl = await uploadToCloudinary(selectedFile);
    }

    const data = {
      description: description,
      image: imageUrl || "",
      userId: userId,
    };

    await dispatch(createPost(data));
    fetchAllPostFunction();

    setDescription("");
    setPreviewImage("");
    setSelectedFile();
  };

  const fetchAllPostFunction = async () => {
    await dispatch(getAllPosts());
  };

  useEffect(() => {
    fetchAllPostFunction();
  }, []);
  return (
    <div className="w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor h-screen overflow-hidden">
      <TopBar />
      <div className="w-full flex gap-2 lg:gap-4 pt-5 pb-10 h-full">
        {/* LEFT */}

        <div className="hidden w-1/3 lg:w-1/4 h-full md:flex flex-col gap-6 overflow-y-auto">
          <ProfileCard />
          {/* <FriendsCard friends={user?.friends} /> */}
        </div>

        {/* CENTER */}

        <div className="flex-1 h-full px-4 flex flex-col gap-6 overflow-y-auto rounded-lg">
          <div className="bg-primary px-4 rounded-lg">
            <div className="w-full flex items-center gap-2 py-4 border-b border-[#66666645]">
              <img
                src="https://www.codewithantonio.com/_next/image?url=%2Flogo2.png&w=48&q=75"
                alt="User Image"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="w-full flex flex-col mt-2">
                <div>
                  <input
                    type="text"
                    name="description"
                    placeholder="What's on your mind...."
                    className={`bg-secondary rounded-full border border-[#66666690] outline-none text-sm text-ascent-1 px-4 py-3 placeholder:text-[#666] w-full`}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {previewImage && (
              <div className="mt-4">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="max-w-[400px] h-auto rounded-lg"
                />
              </div>
            )}
            <div className="flex items-center justify-between py-4">
              <label
                htmlFor="imgUpload"
                className="flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer"
              >
                <input
                  type="file"
                  className="hidden"
                  id="imgUpload"
                  data-max-size="5120"
                  accept=".jpg, .png, .jpeg"
                  onChange={handleFileInputChange}
                />
                <BiImages />
                <span>Image</span>
              </label>

              <label
                className="flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer"
                htmlFor="videoUpload"
              >
                <BiSolidVideo />
                <span>Video</span>
              </label>

              <label
                className="flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer"
                htmlFor="vgifUpload"
              >
                <BsFiletypeGif />
                <span>Gif</span>
              </label>

              <div>
                <CustomButton
                  onClick={handleSubmit}
                  title="Post"
                  containerStyles="bg-[#0444a4] text-white py-1 px-6 rounded-full font-semibold text-sm"
                />
              </div>
            </div>
          </div>
          {posts &&
            posts?.length > 0 &&
            posts?.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
      {/* CENTER */}
    </div>
  );
}

export default Home;
