import Image from "next/image";

export default function Information() {
    return (
        <div className="flex  flex-col-reverse md:flex-row items-center md:justify-between">
            <div className="flex flex-col items-start text-black md:w-1/2 gap-5 font-sans mb-8">
                <h1 className="text-4xl font-extrabold  mt-16">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                <p className="font-normal text-base md:w-[80%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, aliquam sit, accusantium ullam, consequatur deleniti nam quas ducimus dolorem labore tempora? A veritatis vel, nisi possimus eos dicta neque voluptate unde quasi, ipsam et. Fugiat totam a veritatis numquam necessitatibus nesciunt deserunt.</p>
                <button className="pricing_btn mt-10" type="button">Check Pricing</button>
            </div>
            <Image
                
                src="https://res.cloudinary.com/drw8eqw3i/image/upload/v1689680723/Team_chat_hkhi7c.png"
                alt="team chat"
                className="flex md:w-1/2 mt-1"
                width={500}
                height={24}
                priority
            />
        </div>
    );
}