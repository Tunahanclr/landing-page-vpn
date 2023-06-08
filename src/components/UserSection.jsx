import React from "react";
import {AiOutlineUser} from "react-icons/ai"
import location  from "../assets/location.png"
export default function UserSection() {
  return <div className="flex p-[76px] justify-center items-center">
                <div className="w-[824px] flex p-[48.5px] justify-between items-center bg-white/70 rounded h-[114px]">
                    <div className="flex items-center gap-4">
                        <h4 className="flex flex-col font-extrabold text-[20px]">90+ <span className="font-normal">Users</span></h4>
                    </div>
                    <div className="flex items-center gap-4">
                            <img src={location} alt="" />
                        <h4 className="flex flex-col font-extrabold text-[20px]">90+ <span className="font-normal">Users</span></h4>
                    </div>
                    <div className="flex items-center gap-4">
                        <AiOutlineUser/>
                        <h4 className="flex flex-col font-extrabold text-[20px]">90+ <span className="font-normal">Users</span></h4>
                    </div>
                </div>
       </div>;
}
