import React from "react";

type sideBarItemProps = {
  Icon: React.ComponentType;
  text: string;
};

function SideBarItem({ Icon, text }: sideBarItemProps) {
  return (
    <div>
      <div
        className={`self-left items-center space-x-2 flex mb-3 text-bkg  px-5 py-3 w-[160px] rounded-md  ${
          decodeURIComponent(location.pathname) === `/${text}` || decodeURIComponent(location.pathname).includes(`${text}`)  
            ? "bg-[#e4e6eb] font-semibold text-purple-700  "
            : ""
        }`}
      >
        <Icon />
        <h1 className=" capitaliz md:capitalize">{text}</h1>
      </div>
    </div>
  );
}

export default SideBarItem;
