import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="p-4 text-2xl font-bold">Travel Photos</h1>
      <div className="grid grid-rows-none gap-4 p-4 md:grid-cols-5">
        <div className="w-full h-full col-span-2 row-span-2 md:col-span-3">
          <Image
            src="https://images.unsplash.com/photo-1693735017632-dbe1a460f265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
            layout="responsive"
            width="677"
            height="451"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1693302507104-c577598f1ce6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaCUyMHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG9ncmFwaCUyMHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1652277081284-d4d4437cecac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGglMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1644902617089-c40d0345c878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBob3RvZ3JhcGglMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        {/* <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1523698120758-030a38a90d16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhvdG9ncmFwaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
