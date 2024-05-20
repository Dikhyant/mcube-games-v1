"use client"
import SearchIcon from "@/app/_components/SearchInput/SearchIcon";
import {ChangeEvent, useState,} from "react";
import CrossIcon from "@/app/_components/SearchInput/CrossIcon";

export default function SearchInput() {
    const [value, setValue] = useState("");
    const handleChangeInput = (e:  ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return (
        <div className="w-[350px] h-[46px] bg-white rounded-full items-center flex text-base leading-[25.6px]" >
            <SearchIcon className="ml-4 text-brand-granite w-5 h-5" />
            <input className="pl-[13px] w-full bg-transparent outline-none placeholder:text-brand-granite font-arial" placeholder={"Search your product"} onChangeCapture={handleChangeInput} />
            {
                value !== "" ? <div className="mr-[14px] mt-[3px] h-auto" ><CrossIcon /></div> : <></>
            }
        </div>
    )
}