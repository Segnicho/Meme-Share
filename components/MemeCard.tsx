"use client";
import Image from "next/image";
import React from "react";

import ModalImage from  "react-modal-image"
type MemeCardProps = {
  photo: string;
  tags: string[];
};

const MemeCard: React.FC<MemeCardProps> = ({ photo, tags }) => {
  return (
    <div className="m-2 rounded border-gray-400">
      <ModalImage
        small={photo}
        large={photo}
        className="w-[250px] h-[250px]"
        width={15}
        height={15}
        src={photo}
        alt="Meme"
      />
      <div className="flex gap-1">
        {tags.map((tag, index) => (
          <span key={index}>{`#${tag}`}</span>
        ))}
      </div>
    </div>
  );
};

export default MemeCard;
