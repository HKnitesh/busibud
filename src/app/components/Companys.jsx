import Image from 'next/image';


export default function Company() {
    return (
        <div className="flex flex-col items-center text-black   md:justify-between my-56  ">
            <div className="flex items-center justify-center text-center w-4/5 my-16">

                <h2 className="font-bold text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            </div>

            <div className="flex flex-col md:flex-row md:justify-evenly  gap-5 w-full">

                <div className="flex flex-col p-6 bg-white text-black gap-2.5  items-center md:w-fit">
                    <Image
                        src="https://res.cloudinary.com/drw8eqw3i/image/upload/v1689676431/Forms_on_Fire_gl1vwp.webp"
                        alt="forms on fire"
                        width={200}
                        height={50}
                    />
                    <p className=" text-base font-semibold">Forms on Fire</p>
                </div>
                <div className="flex flex-col p-6 bg-white text-black  gap-4  items-center md:w-fit">
                    <Image
                        src="https://res.cloudinary.com/drw8eqw3i/image/upload/v1689677057/ElectroNeek_Studio_IDE_tk4ajq.png"
                        alt="ElectroNeek "
                        width={200}
                        height={50}
                    />
                    <p className=" text-base font-semibold">ElectroNeek Studio IDE</p>
                </div>
                <div className="flex flex-col p-6 bg-white text-black  gap-2 items-center md:w-fit">
                    <Image
                        src="https://res.cloudinary.com/drw8eqw3i/image/upload/v1689677272/jotform_xuya82.png"
                        alt="forms on fire"
                        width={65}
                        height={35}
                    />
                    <p className=" text-base font-semibold">Jot form</p>
                </div>
            </div>
        </div>
    );
}