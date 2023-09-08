import React from "react";
import IgImg1 from "../public/images/ig-img-1.jpeg";
import IgImg2 from "../public/images/ig-img-2.jpeg";
import IgImg3 from "../public/images/ig-img-3.jpeg";
import IgImg4 from "../public/images/ig-img-4.jpeg";
import IgImg5 from "../public/images/ig-img-5.jpeg";
import IgImg6 from "../public/images/ig-img-6.jpeg";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const InstagramImg = ({ socialImg }) => {
  return (
    <div className="relative">
      <Image
        src={socialImg}
        alt="/"
        className="w-full h-full"
        layout="responsive"
      />
      {/* Overlay */}
      <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 group">
        <p className="text-gray-300 hidden group-hover:block">
          <FaInstagram size={30} />
        </p>
      </div>
    </div>
  );
};

export default InstagramImg;
