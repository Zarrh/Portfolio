import { GiClubs } from "react-icons/gi";
import type { Link } from "../constants";
import { links } from "../constants";
import { TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
  return (
    <section id="navbar" className="
      p-8 fixed top-0 w-full z-200
      bg-white/10 backdrop-blur-md border-b border-white/20
    ">

      <div className="flex flex-row justify-between items-center md:mx-[12.5%]">
        <a href="#hero">
          <h1 className="text-[28px] font-bold hover:text-primary">
            <GiClubs />
          </h1>
        </a>

        <nav className="hidden md:block">
          <ul className="flex flex-row gap-8 text-[18px]">
            {links && links.map((link: Link, index) => (
              <a key={index} href={link.href} className="hover:text-primary transition ease-in duration-200">
                <li>
                  {link.text}
                </li>
              </a>
            ))}
          </ul>
        </nav>

        <div className="block md:hidden text-[32px]">
          <TiThMenuOutline />
        </div>
      </div>
    </section>
  );
};

export default Navbar;