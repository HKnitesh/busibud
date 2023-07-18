
import { FcMoneyTransfer, FcParallelTasks, FcCollect, FcCollaboration } from "react-icons/fc";

export default function Card() {
    return (
        <div className="flex flex-col  text-black mt-5 md:mt-28  ">
            <div className="flex items-center justify-center  my-16">

                <h2 className="font-bold text-3xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            </div>

            <div className="flex flex-col gap-10">

                <div className="flex md:justify-start">

                    <div className="flex flex-col gap-4 text-black items-start md:w-3/5">
                        <div className="flex flex-row gap-5 justify-center items-center ">
                            <FcMoneyTransfer className="w-16 h-16" />
                            <h2 className="font-semibold text-xl">Lorem ipsum dolor sit.</h2>
                        </div>
                        <p className=" text-base font-normal"> adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. ut maximus ante. Suspendisse varius dolor nec bibendum. Suspendisse varius dolor nec bibendum.</p>
                        <button className="pricing_btn" type="button">Check Pricing</button>
                    </div>
                </div>
                <div className="flex md:justify-end">

                    <div className="flex flex-col gap-4 text-black items-start md:w-2/5">
                        <div className="flex flex-row gap-5 justify-center items-center ">
                            <FcParallelTasks className="w-16 h-16" />
                            <h2 className="font-semibold text-xl">Lorem ipsum dolor sit.</h2>
                        </div>
                        <p className=" text-base font-normal"> adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. ut maximus ante. Suspendisse varius dolor nec bibendum.</p>
                        <button className="pricing_btn" type="button">Check Pricing</button>
                    </div>
                </div>
                <div className="flex md:justify-start">

                    <div className="flex flex-col gap-4 text-black items-start md:w-3/5">
                        <div className="flex flex-row gap-5 justify-center items-center ">
                            <FcCollect className="w-16 h-16" />
                            <h2 className="font-semibold text-xl">Lorem ipsum dolor sit.</h2>
                        </div>
                        <p className=" text-base font-normal"> adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. ut maximus ante. Suspendisse varius dolor nec bibendum. Suspendisse varius dolor nec bibendum.</p>
                        <button className="pricing_btn" type="button">Check Pricing</button>
                    </div>
                </div>
                <div className="flex md:justify-end">

                    <div className="flex flex-col gap-4 text-black items-start md:w-2/5">
                        <div className="flex flex-row gap-5 justify-center items-center ">
                            <FcCollaboration className="w-16 h-16" />
                            <h2 className="font-semibold text-xl">Lorem ipsum dolor sit.</h2>
                        </div>
                        <p className=" text-base font-normal"> adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. ut maximus ante. Suspendisse varius dolor nec bibendum.</p>
                        <button className="pricing_btn" type="button">Check Pricing</button>
                    </div>
                </div>
            </div>


        </div>

    );
}


