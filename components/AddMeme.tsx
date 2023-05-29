import React, { ChangeEvent, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

interface FileUploadProps {
  onImageUpload: (file: File) => void;
}

const AddPhoto: React.FC<FileUploadProps> = ({ onImageUpload }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(file);
      // Read the file and set the image preview
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full mb-16 h-1/2 lg:h-2/3 mt-8 bg-inherit rounded-lg flex items-center justify-center flex-col p-2 lg:p-5">
      <div className="flex flex-wrap flex-col gap-2 items-center mt-3">
        <label htmlFor="">Upload Meme</label>
        <div className="flex items-center justify-center p-3">
          <label className="flex flex-col items-center justify-center w-full h-50 border-2 border-text-primary/20  rounded-lg cursor-pointer bg-inherit">
            <div className="flex flex-col items-center justify-center p-4 pb-6">
              <div className="rounded-full bg-slate-200 m-4">
                <AiOutlineCloudUpload className="w-10 h-10 text-primary p-2" />
              </div>
              <div className="hidden sm:block">
                <p className=" mb-2 text-sm text-primary-text">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-tertiary-text">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
            </div>
            <input
              type="file"
              className="hidden sr-only"
              id="upload-file"
              accept="image/*"
              onChange={handleFileUpload}
            />
          </label>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Selected Image"
              className="w-32 h-32 object-cover rounded-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddPhoto;
