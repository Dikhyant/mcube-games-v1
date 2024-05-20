import Image from "next/image";
import SearchInput from "@/app/_components/SearchInput/SearchInput";
import SearchIcon from "@/app/_components/Header/SearchIcon";
import DropDown, {IDropDown} from "@/app/_components/Header/DropDown";
import CartIcon from "@/app/_components/Header/CartIcon";

export interface IHeaderItem {
    text: string;
}

export interface INavItem extends IHeaderItem {
    href: string;
}

const categories: INavItem[] = [
    {
        text: "Mcube Exclusive",
        href: "/Mcube Exclusive",
    },
    {
        text: "Digital Cards",
        href: "/Digital Cards"
    },
    {
        text: "ps5",
        href: "/ps5"
    },
    {
        text: "ps4",
        href: "/ps4"
    },
    {
        text: "switch",
        href: "/switch"
    },
    {
        text: "xbox one",
        href: "/xbox one"
    },
    {
        text: "wii",
        href: "/wii"
    },
    {
        text: "All Accessories",
        href: "/All Accessories"
    }
]

const headerItems: IHeaderItem[] = [
    {
        text: "Home",
        href: "/"
    } as INavItem,
    {
        text: "Categories",
        options: categories
    } as IDropDown,
    {
        text: "Shop",
        href: "/shop"
    } as INavItem,
    {
        text: "Contact",
        href: "/contact"
    } as INavItem,
    {
        text: "About Us",
        href: "/about-us"
    } as INavItem,
]

const authOptions: INavItem[] = [
    {
        text: "sign up",
        href: "/register"
    },
    {
        text: "sign in",
        href: "/sign-in"
    }
]

export default function Header() {
    return (
        <header className="h-[70px] w-full bg-brand-black-russian-400 shadow-header px-3 flex items-center">
            <a className="h-[70px] block mr-4"><Image className="w-[110px] h-[90px]" src={"/images/mcube-logo.png"}
                                                      alt={"Mcube logo"} width={110} height={90}/></a>
            <div className="flex ml-[100px]">
                <SearchInput/>
            </div>
            <button className="p-[7px]"><SearchIcon width={30} height={30} className="text-brand-cloud"/></button>
            <div className="ml-[90px] mr-[118.175px] h-full flex">
                {
                    headerItems.map((item, index) => {
                        const href = (item as INavItem).href;
                        if (href) {
                            return (<a key={index}
                                       className="font-rajdhani tracking-widest leading-[25.6px] block text-white px-2 py-[25px] uppercase text-base font-semibold hover:text-brand-pumpkin-orange transition-colors duration-200 ease-in-out"
                                       href={href}>{item.text}</a>)
                        }
                        const options = (item as IDropDown).options;
                        if (options) {
                            return (
                                <DropDown key={index} dropDown={item as IDropDown} titleClassName={"px-2 py-[25px]"}/>)
                        }
                        return (<></>)
                    })
                }
            </div>
            <div className="flex mr-[15px] mt-[-15px] items-center">
                <a className="block px-2 pb-2 pt-[15px] ml-2" href={"/cart"}><CartIcon className={"text-white"}
                                                                                       width={30}
                                                                                       height={30}/></a>
                <DropDown dropDown={{text: "Sign Up/Sign In", options: authOptions}}
                          titleClassName={"px-2 pb-2 pt-[15px]"} rootClassName={"px-2 pb-2 pt-[15px] ml-2"}
                          optionClassName={"px-[10px] pb-[10px] pt-[15px]"}
                          optionContainerClassName={"pb-6"}/>
            </div>

        </header>
    )
}