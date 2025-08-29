import { footerLinks, type IconLink } from "../constants";

const Footer = () => {
  return (
    <section 
      id="footer" 
      className="
        py-[2rem]
        bg-footer
        border-t-2
        border-neutral-700
      "
    >
      <ul className="flex flex-row justify-evenly mb-8">
        {footerLinks && footerLinks.map((link: IconLink, index) => (
          <li key={index}>
            {link.icon && typeof(link.icon) === "string" ?
              (<a href={link.href} target="_blank">
                <img className="h-[36px] w-auto hover:cursor-pointer" src={link.icon} alt={""} />
              </a>)
              : typeof(link.icon) === 'function' && (
                <a href={link.href} target="_blank">
                  <link.icon className="h-[36px] w-auto text-gray-500 hover:cursor-pointer hover:text-gray-300" />
                </a>)
            }
          </li>
        ))}
      </ul>
      <p className="text-[18px] font-medium">
        Luca Fagaraz - Portfolio
      </p>
    </section>
  );
};

export default Footer;