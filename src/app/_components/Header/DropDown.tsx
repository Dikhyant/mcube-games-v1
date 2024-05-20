"use client"
import {IHeaderItem, INavItem} from "@/app/_components/Header/Header";
import {cn} from "@/utils/misc";
import {useEffect, useRef, useState} from "react";

export interface IDropDown extends IHeaderItem {
    options: INavItem[]
}

interface IDropDownProps {
    dropDown: IDropDown;
    titleClassName?: string;
    rootClassName?: string;
    optionClassName?: string;
    optionContainerClassName?: string;
}

export default function DropDown({
                                     dropDown,
                                     titleClassName,
                                     rootClassName,
                                     optionClassName,
                                     optionContainerClassName
                                 }: IDropDownProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const rootComponentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickEvent = (e: MouseEvent) => {
            if (e.target && !rootComponentRef.current?.contains(e.target as HTMLElement)) {
                setIsExpanded(false);
            }
        }
        document.addEventListener("click", handleClickEvent)
        return () => {
            document.removeEventListener("click", handleClickEvent);
        }
    }, [rootComponentRef]);

    const handleTitleClick = () => {
        setIsExpanded(prev => !prev);
    }

    return (
        <div className={cn("relative", rootClassName)} ref={rootComponentRef}>
            {dropDown?.text &&
                <a href={"#"} onClick={handleTitleClick}
                   className={cn("font-rajdhani tracking-widest leading-[25.6px] block text-white uppercase text-base font-semibold hover:text-brand-pumpkin-orange focus:text-brand-pumpkin-orange transition-colors duration-200 ease-in-out", titleClassName)}>{dropDown.text}</a>}
            {(dropDown?.options && isExpanded) ? (
                <div
                    className={cn("absolute w-[155px] py-2 rounded-b-md top-[120%] bg-brand-black-russian-800", optionContainerClassName)}>{
                    dropDown.options.map((option, index) => {
                        return (
                            <a key={index}
                               className={cn("block uppercase p-[10px] text-white font-rajdhani text-[15px] tracking-widest font-semibold leading-[25.6px]", optionClassName)}
                               href={option?.href ? option?.href : "#"}>{option.text}</a>
                        )
                    })
                }</div>) : <></>}
        </div>
    )
}