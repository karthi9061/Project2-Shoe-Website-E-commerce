import React from "react";

const StyledButton = () => {
  return (
    <div class="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
   

      <div class="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-lime-200 to-yellow-200 p-3 rounded-full cursor-pointer duration-300">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-zinc-600"
        >
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
          ></path>
        </svg>
        <span class="text-[0px] group-hover:text-sm duration-300">
          Login to get more offers
        </span>
      </div>
    </div>
  );
};

export default StyledButton;
