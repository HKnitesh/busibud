'use client'
import { RxChevronDown, RxHamburgerMenu } from "react-icons/rx";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from "react";

export default function Header() {


    return (
        <>
            <div className="flex md:flex-col flex-row  items-center md:justify-center justify-between">
                <div className="flex border-black border w-40 h-12 my-4 mx-4"></div>

                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <button
                            className="md:hidden mx-4 rounded-full w-[35px] h-[35px] inline-flex items-center justify-center  bg-white  hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black">
                            <RxHamburgerMenu />
                        </button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                        <DropdownMenu.Content className=" min-w-[125px] bg-zinc-300 text-zinc-700 rounded-md px-3 py-1.5 shadow-3">
                            <DropdownMenu.Label />
                            <DropdownMenu.Item>
                                <div className="nav_bar">Nav1</div>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <div className="nav_bar">Nav2</div>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <div className="nav_bar">Nav5</div>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <div className="nav_bar">Nav6</div>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <div className="nav_bar">Nav7</div>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <div className="nav_bar">Nav8</div>
                            </DropdownMenu.Item>


                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>

                <nav className="hidden md:flex w-full items-center justify-center text-black font-medium text-lg">
                    <div className="flex md:flex-row flex-col justify-between w-3/5">
                        <div className="nav_bar">Nav1</div>
                        <div className="nav_bar">Nav2</div>

                        {/* nav 3 */}
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                <button className="nav_bar flex flex-row items-center gap-1">
                                    <p>Nav3</p>
                                    <RxChevronDown />
                                </button>
                            </DropdownMenu.Trigger>

                            <DropdownMenu.Portal>
                                <DropdownMenu.Content className=" min-w-[125px] bg-zinc-300 text-zinc-700 rounded-md px-3 py-1.5 shadow-3">
                                    <DropdownMenu.Label />
                                    <DropdownMenu.Item>
                                        lorem
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item>
                                        lorem
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item>
                                        lorem
                                    </DropdownMenu.Item>

                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>

                        {/* nav 4 */}
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                <button className="nav_bar flex flex-row items-center gap-1">
                                    <p>Nav4</p>
                                    <RxChevronDown />
                                </button>
                            </DropdownMenu.Trigger>

                            <DropdownMenu.Portal>
                                <DropdownMenu.Content className=" min-w-[125px] bg-zinc-300 text-zinc-700 rounded-md px-3 py-1.5 shadow-3">
                                    <DropdownMenu.Label />
                                    <DropdownMenu.Item>
                                        lorem
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item>
                                        lorem
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item>
                                        lorem
                                    </DropdownMenu.Item>

                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>




                        <div className="nav_bar">Nav5</div>
                        <div className="nav_bar">Nav6</div>
                        <div className="nav_bar">Nav7</div>
                        <div className="nav_bar">Nav8</div>
                    </div>
                </nav>


            </div>
            <div className='w-full h-0 border-[#707070F] border border-solid mt-2'></div>
        </>

    );
}