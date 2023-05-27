import React from "react";

function Header() {
  return (
    <header className="w-full flex absolute justify-center items-center h-[90px] text-white text-[16px] bg-black bg-opacity-70 border-b-[1px] border-b-white">
      <div className="max-w-screen-xl mx-auto flex grow justify-between items-center">
        <button className="text-3xl font-bold">Team 99</button>
        <div className="flex grow gap-32 ml-32 items-center font-bold text-md">
          <button>프로젝트 소개</button>
          <button>주요사업</button>
          <button>NFT</button>
          <button>DeFi</button>
        </div>
        <button>Log-In</button>
      </div>
    </header>
  );
}

export default Header;
