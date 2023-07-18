import { FcApproval } from "react-icons/fc";
import Swipers from "./Swipers";

export default function Card() {
    return (
        <div className="flex flex-col  text-black mt-5 md:mt-28  ">
            <div className="flex items-center justify-center  my-16">

                <h2 className="font-bold text-3xl">Lorem ipsum dolor sit.</h2>
            </div>

            <div className="flex flex-col gap-5 bg-[#f8fafc] rounded-[42px] shadow-4p h-[350px] relative">
                <div className="flex flex-row items-center gap-3 m-8">
                    <FcApproval className="w-14 h-14" />
                    <h3 className="flex font-black font-sans text-2xl">Lorem ipsum dolor sit.</h3>
                </div>

                <Swipers/>
            </div>


        </div>

    );
}


