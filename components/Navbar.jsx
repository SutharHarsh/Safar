import { NAV_LINKS } from "@/app/constants/Index";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
function navbar() {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 md:py-10 py-5">
      <Link href="/">
        <span className="text-5xl text-black font-bold">S<span className="text-green-50">afar</span></span>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            id={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black duration-300"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      {/* <div className="lg:flexCenter hidden">
        // <Button
        //   type='button'
        //   title='login'
        //   icon='/user.svg'
        //   variant='btn_dark_green'
        //   /> 
      </div> */}

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block lg:hidden cursor-pointer"
      />
    </nav>
  );
}

export default navbar;
