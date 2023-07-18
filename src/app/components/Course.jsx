import Image from "next/image";

export default function Card() {
    return (
        <div className="flex flex-col items-center text-black mt-5 md:mt-28  md:justify-between ">
            <div className="flex items-center justify-center w-4/5 my-16">

                <h2 className="font-bold text-3xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between  gap-5 ">

                <div className="flex flex-col p-6 bg-white text-black rounded-2xl  gap-2.5 justify-start items-start md:w-[30%]">
                    <Image

                        src="/teacher_girl.svg"
                        alt="teacher"
                        className="flex md:w-1/2 mt-1"
                        width={100}
                        height={24}
                        priority
                    />
                    <h4 className=" font-semibold text-lg mt-2">Lorem ipsum dolor sit.</h4>
                    <p className=" text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, provident cupiditate, sapiente ratione eum praesentium sunt nam officia expedita veniam consequuntur consectetur quos porro. Quibusdam!</p>
                </div>
                <div className="flex flex-col p-6 bg-white text-black rounded-2xl  gap-2.5 justify-start items-start md:w-[30%]">
                    <Image

                        src="/developer.svg"
                        alt="developer"
                        className="flex md:w-1/2 mt-1"
                        width={100}
                        height={24}
                        priority
                    />
                    <h4 className=" font-semibold text-lg mt-2">Lorem ipsum dolor sit.</h4>
                    <p className=" text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, provident cupiditate, sapiente ratione eum praesentium sunt nam officia expedita veniam consequuntur consectetur quos porro. Quibusdam!</p>
                </div>
                <div className="flex flex-col p-6 bg-white text-black rounded-2xl  gap-2.5 justify-start items-start md:w-[30%]">
                    <Image

                        src="/learning.svg"
                        alt="learner"
                        className="flex md:w-1/2 mt-1"
                        width={100}
                        height={24}
                        priority
                    />
                    <h4 className=" font-semibold text-lg mt-2">Lorem ipsum dolor sit.</h4>
                    <p className=" text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, provident cupiditate, sapiente ratione eum praesentium sunt nam officia expedita veniam consequuntur consectetur quos porro. Quibusdam!</p>
                </div>
            </div>
        </div>

    );
}


