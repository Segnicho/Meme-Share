"use client";
import AddPhoto from "@/components/AddMeme";
import { useAddNewMemeMutation } from "@/features/memeSlice";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddMeme:React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [tags, setTags] = useState<string[]>([]); // State for tags

  const handleImageUpload = (file: File) => {
    setSelectedImage(file);
  };

  const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTags(event.target.value.split(","));
  };

  useEffect(() => {
    const getImageUrl = async () => {
      try {
        if (selectedImage) {
          console.log("selectedImg", selectedImage);

          const formData = new FormData();
          formData.append("file", selectedImage);
          formData.append("upload_preset", "qja0zgtn");

          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );

          if (response.ok) {
            const data = await response.json();

            const imageUrl = data.url;
            setImageSrc(imageUrl);
          } else {
            console.error(
              "Image upload failed: ",
              response.statusText,
              response.json()
            );
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getImageUrl();
  }, [selectedImage]);

  const [
    addNewMeme,
    { isSuccess: isAddMemeSuccess, isError: isAddMemeError, error },
  ] = useAddNewMemeMutation();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("imageeeeeee", imageSrc, tags);
    await addNewMeme({
      photo: imageSrc,
      tags,
    });
  };
  useEffect(() => {
    if (isAddMemeSuccess) {
      toast.success("Succesfully added meme");
      window.location.href = "/";
    }
    if (isAddMemeError) {
      toast.error("Error adding a meme");
    }
  }, [isAddMemeSuccess, isAddMemeError]);

  return (
    <div>
      <div>
        <h1 className="text-center font-bold my-3">Add Meme</h1>
        <form className="mb-10" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center gap-1">
            <label htmlFor="tags">Tags:</label>
            <input
              className="border border-1 border-gray-400 rounded-md outline-none p-2"
              type="text"
              id="tags"
              value={tags.join(",")}
              onChange={handleTagsChange}
              placeholder="#tech #joke #dad-jokes..."
            />
          </div>
          <AddPhoto onImageUpload={handleImageUpload} />
          <div className="flex flex-row gap-4 mt-5 lg:mt-8 p-4 justify-center">
            <button className="btn btn-outline border-none">Cancel</button>
            <button className="btn btn-primary" type="submit">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMeme;
