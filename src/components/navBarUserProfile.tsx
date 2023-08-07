"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react';
import Avatar from './avatar';

const profileImageUrl = "/profile.jpeg";

const userProfileDropdownItems = [
    { name: "Account", href: "/" },
    { name: "Wallet", href: "/" },
    { name: "Gallery", href: "/" },
    { name: "Help", href: "/" },
    { },
    { name: "Logout", href: "/api/auth/signout" },
];

type Props = {
    user?: object;
};

export default function NavBarUserProfile({ user }: Props) {
    return (
        <Popover className="relative">
            <div className="flex items-center justify-between">
                {/* <div className="mr-3 text-sm bg-overlay-bg shadow-inner px-3 py-1 rounded-md">Credit: 200</div> */}
                <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 mt-1">
                    <Avatar user={{profileImageUrl, firtName: "Ian", lastName: "Z"}} />
                </Popover.Button>
            </div>
            <Popover.Overlay className="fixed inset-0 opacity-0" />

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute right-0 z-10 mt-5 flex w-screen max-w-min">
                    <div className="w-72 shrink rounded-xl bg-overlay-bg pt-4 pb-2 text-sm font-semibold leading-6 shadow-lg">
                        <div className="px-4 flex items-center justify-start mb-3">
                            <div className="grow-0 shrink-0 rounded-full bg-cover w-12 h-12" style={{ backgroundImage: `url(${profileImageUrl})` }}></div>
                            <div className="ml-3 grow shrink overflow-hidden flex-col items-start">
                                <div className="text-md font-black">Vincent</div>
                                <div className="truncate">vincent987@gmail.com</div>
                            </div>
                        </div>
                        <div className="shadow-inner shadown-lg flex items-center justify-between bg-artvortex border-t border-b  border-secondary py-6 my-1 px-4">
                            <div className="">Credit: </div>
                            <div className="text-2xl italic font-bold">200</div>
                        </div>
                        {userProfileDropdownItems.map((item, index) => (
                            item.name
                            ? <a key={index} href={item.href} className="block px-4 py-2 hover:bg-surf rounded">
                                {item.name}
                            </a>
                            : <div key={index} className="my-1 border-t border-secondary"></div>
                        ))}
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}