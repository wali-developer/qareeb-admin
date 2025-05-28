'use client';

import { MImage, Typography } from '@/app/components/common';
import { type IMenuItem } from '@/utils/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export const MenuItemDropdown = ({
    item,
}: {
    item: IMenuItem;
}): React.ReactElement => {
    const pathname = usePathname();
    const [show, setShow] = useState<boolean>(false);

    const active: boolean = Array.isArray(item?.dropdown)
        ? item.dropdown.some(i => i?.path === pathname)
        : pathname.includes(item.path);

    return (
        <li className="mb-3.5">
            <div
                className={`w-full h-[64px] flex items-center rounded-lg justify-between hover:bg-primary/50 transition-all duration-500 cursor-pointer px-7 ${active ? 'bg-primary' : 'bg-secondary'}`}
                onClick={() => {
                    setShow(prev => !prev);
                }}
            >
                <div className="h-full flex gap-x-3.5 items-center flex-1">
                    <MImage
                        src={active ? item.activeIcon : item.icon}
                        alt={item.title}
                        w={19}
                        h={19}
                        className="object-contain"
                    />
                    <Typography
                        className={`transition-all duration-300 text-white`}
                    >
                        {item.title}
                    </Typography>
                </div>
                {show ? (
                    <IoIosArrowUp className="text-xl text-white" />
                ) : (
                    <IoIosArrowDown className="text-xl text-white" />
                )}
            </div>
            {show && (
                <ul className="ml-7 my-3 space-y-2">
                    {item?.dropdown?.map((subItem, index) => {
                        const subActive = subItem?.path === pathname;
                        return (
                            <li key={index}>
                                <Link
                                    href={subItem.path}
                                    className={`w-full h-[54px] flex items-center rounded-lg hover:bg-primary/50 transition-all duration-500 ${subActive ? 'bg-primary' : 'bg-secondary'}`}
                                >
                                    <div className="h-full pl-7 flex gap-x-3.5 items-center flex-1">
                                        <Typography
                                            className={`transition-all duration-300 text-white`}
                                        >
                                            {subItem.title}
                                        </Typography>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </li>
    );
};
