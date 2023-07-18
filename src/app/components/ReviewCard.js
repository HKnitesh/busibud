import Profile from "./Profile";
import { BsStarFill } from "react-icons/bs";


export default function ReviewCard(props) {
    return (
        <div className="flex flex-col md:flex-row text-black">
            <div className="flex flex-col p-5 bg-white shadow-4p rounded-3xl w-72 gap-6">
                <div className="flex flex-row gap-2.5">

                    <Profile />
                    <div className="flex flex-col gap-1 w-4/5">
                        <div className="flex flex-row justify-between">
                            <h4 className=" text-sm font-semibold">{props.name}</h4>
                            <div className="flex flex-row gap-1">
                                <BsStarFill className="text-yellow-500" />
                                <BsStarFill className="text-yellow-500" />
                                <BsStarFill className="text-yellow-500" />
                                <BsStarFill className="text-yellow-500" />
                            </div>
                        </div>
                        <p className="text-sm font-normal text-[#615c5c]">{props.title}</p>
                    </div>
                    
                </div>
                <p className="font-normal text-xs text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident unde id tempora fugiat amet placeat ratione excepturi sit ipsa facilis dolorem quis totam cum, adipisci non. Deserunt nesciunt harum esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rem blanditiis assumenda obcaecati quibusdam vel dolor ea natus quam voluptates omnis eos voluptatem molestias totam dolore, perferendis hic molestiae unde.</p>
            </div>
        </div>
    );
}