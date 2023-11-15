import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="w-[1520] mx-auto grid md:grid-cols-2">
        <img
          className=" mx-auto my-4"
          src="https://th.bing.com/th/id/OIP.mvQ55jKEJXs_roP06oZA_gHaE7?pid=ImgDet&rs=1"
          alt="img"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless Convenience on-demand
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
            explicabo, perferendis odit accusamus corrupti doloribus tenetur,
            sequi recusandae dignissimos aspernatur ipsa possimus! Cum provident
            eius, quibusdam nam consequatur voluptas est. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Consequatur praesentium sit
            laboriosam totam labore earum consequuntur id hic corrupti odit?
            Error voluptas eos ea dolorum, nesciunt sunt minima. Molestiae,
            pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Officia corrupti omnis voluptate maiores alias, est dignissimos
            inventore nam iste nobis culpa minus voluptas dolorum sit enim
            maxime assumenda id esse.
          </p>
          <button className="bg-black text-[#00df9a] w=[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
