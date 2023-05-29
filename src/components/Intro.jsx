import React from "react";

function Intro() {
  return (
    <div>
      <img
        className="w-full h-[758px]"
        src={`${process.env.PUBLIC_URL}/images/ocean.jpg`}
        alt="background"
      />
      <div className="w-full justify-center flex absolute top-40 left-1/2 -translate-x-1/2 ">
        <div className="flex flex-col mr-32">
          <div className="text-white text-6xl">
            <div>KEITI</div>
            <div>미래를 여는 환경 솔루션</div>
          </div>
          <div className="flex items-center text-white font-bold text-xl mt-11">
            <button className="intro_btn-style">#사업, 이슈</button>
            <button className="intro_btn-style">#기술원 소식</button>
            <button className="intro_btn-style">#홍보자료</button>
          </div>
          <div className="flex justify-evenly items-center bg-white rounded-xl mt-8 px-8 py-16 font-bold">
            <div className="border-r-[1px] h-14 border-black flex justify-center items-center mr-12">
              <div className="text-xl px-7">사업, 이슈</div>
            </div>
            <button className="issue_icon">
              <img
                className="issue_img"
                src={`${process.env.PUBLIC_URL}/images/trash.png`}
                alt="seed"
              />
              <span>환경기술개발</span>
            </button>
            <button className="issue_icon">
              <img
                className="issue_img"
                src={`${process.env.PUBLIC_URL}/images/seed.png`}
                alt="seed"
              />
              <span>환경산업육성</span>
            </button>
            <button className="issue_icon">
              <img
                className="issue_img"
                src={`${process.env.PUBLIC_URL}/images/trash.png`}
                alt="seed"
              />
              친환경생활 촉진
            </button>
            <button className="issue_icon">
              <img
                className="issue_img"
                src={`${process.env.PUBLIC_URL}/images/seed.png`}
                alt="seed"
              />
              환경보건안전
            </button>
            <button className="issue_icon">
              <img
                className="issue_img"
                src={`${process.env.PUBLIC_URL}/images/trash.png`}
                alt="seed"
              />
              환경이슈
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl flex flex-col w-[220px]">
          <div className="text-white w-[220px] h-[62px] bg-slate-800 rounded-t-xl flex justify-center items-center">
            관련사이트
          </div>
          <div className="sites_form">사이트1</div>
          <div className="sites_form">사이트2</div>
          <div className="sites_form">사이트3</div>
          <div className="sites_form">사이트4</div>
          <div className="bg-slate-100 w-[220px] h-[46px] rounded-b-xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
