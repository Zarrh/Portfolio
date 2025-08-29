import { type IconType } from "react-icons";
import { DiMysql, DiReact } from "react-icons/di";
import { FaBookReader, FaExternalLinkAlt, FaGithub, FaJsSquare } from "react-icons/fa";

import EnglandFlag from "../assets/flags/England-white.svg?react";
import ItalyFlag from "../assets/flags/Italy-white.svg?react";
import FranceFlag from "../assets/flags/France-white.svg?react";

import { RiGraduationCapFill, RiTailwindCssFill } from "react-icons/ri";
import { FaDartLang, FaDocker, FaFlutter, FaGitAlt, FaHtml5, FaLinux, FaNodeJs, FaPython, FaSass } from "react-icons/fa6";
import { SiArduino, SiCplusplus, SiEspressif, SiExpress, SiFlask, SiGooglesheets, SiLatex, SiNumpy, SiYaml } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

export type Technology = {
  name: string,
  icon: string | IconType,
  color?: string,
}

export type Project = {
  title: string,
  text?: string,
  techstack?: Array<Technology>,
  links?: Array<IconLink>,
  img?: string,
}

export type Link = {
  text: string,
  href: string,
}

export type IconLink = {
  icon: string | IconType,
  href: string,
}

export type Study = {
  title: string,
  years: string,
  text?: string,
  location: string,
  degree?: [number, number], // First value: obtained score; Second value: Maximum score
  lateralIcon?: string | IconType,
  link?: string,
}

export type Language = {
  name: string,
  icon?: string | IconType | React.FC<React.SVGProps<SVGSVGElement>>;
  level?: string,
  text?: string,
  levelEvaluation?: number, // A real number from 0 to 1
}

export const heroLinks: Array<IconLink> = [
  {
    icon: FaGithub,
    href: "https://github.com/Zarrh"
  }
]

export const projects: Array<Project> = [
  {
    title: "Knowledge Graph",
    text: "A webapp to organize the knowledge over several subjects in a graph, highlighting the connections between different thematics. The app also allows the user to find the most relevant nodes of the structure and to generate paths covering some selected subjects.",
    techstack: [
      {
        name: "React",
        icon: DiReact,
        color: "aqua"
      },
      {
        name: "JavaScript",
        icon: FaJsSquare,
        color: "yellow"
      }
    ],
    links: [
      {
        icon: FaExternalLinkAlt,
        href: "https://zarrh.github.io/Knowledge-Graph/",
      },
      {
        icon: FaGithub,
        href: "https://github.com/Zarrh/Knowledge-Graph",
      }
    ],
  },
  {
    title: "Grades Statistics App",
    text: "A multiplatform app to visualize and get useful statistics and predictions of a set of high school grades.",
    techstack: [
      {
        name: "Flutter",
        icon: FaFlutter,
        color: "cyan"
      },
      {
        name: "Dart",
        icon: FaDartLang,
        color: "aqua"
      }
    ],
    links: [
      {
        icon: FaGithub,
        href: "https://github.com/Zarrh/Grades-App",
      }
    ],
  },
  {
    title: "Archimede Project Website",
    text: "The website of the science based project \"Archimede Project\" of the Marco Casagrande Lyceum in Pieve di Soligo. The site focuses on handling the archive of the project, including articles, pictures and more.",
    techstack: [
      {
        name: "React",
        icon: DiReact,
        color: "aqua"
      },
      {
        name: "JavaScript",
        icon: FaJsSquare,
        color: "yellow"
      },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
        color: "aqua"
      },
      {
        name: "ExpressJS",
        icon: SiExpress,
        color: "grey",
      },
      {
        name: "NodeJS",
        icon: FaNodeJs,
        color: "green",
      }
    ],
    links: [
      {
        icon: FaExternalLinkAlt,
        href: "http://gw.isisspieve.it:8080/",
      }
    ],
  },
  {
    title: "Chess GP categories automation",
    text: "An automation software to handle the promotions and the categories of the Grand Prix chess tournaments of the Region of Veneto.",
    techstack: [
      {
        name: "Python",
        icon: FaPython,
        color: "aqua"
      },
      {
        name: "MySQL",
        icon: DiMysql,
        color: "teal"
      },
      {
        name: "Google Sheets",
        icon: SiGooglesheets,
        color: "green"
      },
      {
        name: "Flask",
        icon: SiFlask,
        color: "teal"
      },
    ],
  },
  {
    title: "BJ table automation",
    text: "Development of a \"smart\" Black Jack table, which can recognize the cards dealt and show them on a dynamic locally hosted website that is also able to handle the bets using apposite buttons connected to an ESP32.",
    techstack: [
      {
        name: "Python",
        icon: FaPython,
        color: "aqua"
      },
      {
        name: "React",
        icon: DiReact,
        color: "aqua"
      },
      {
        name: "JavaScript",
        icon: FaJsSquare,
        color: "yellow"
      },
      {
        name: "NodeJS",
        icon: FaNodeJs,
        color: "green",
      },
      {
        name: "ExpressJS",
        icon: SiExpress,
        color: "grey",
      },
      {
        name: "Espressif",
        icon: SiEspressif,
        color: "red"
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "gray"
      },
    ],
    links: [
      {
        icon: FaGithub,
        href: "https://github.com/Zarrh/Black-Jack",
      }
    ],
  },
  {
    title: "Chess ranking utility",
    text: "An automation software that allows to generate and update custom leaderboards and rankings of a series of chess tournaments using a CLI.",
    techstack: [
      {
        name: "Python",
        icon: FaPython,
        color: "aqua"
      },
      {
        name: "React",
        icon: DiReact,
        color: "aqua"
      },
      {
        name: "JavaScript",
        icon: FaJsSquare,
        color: "yellow"
      },
      {
        name: "Sass",
        icon: FaSass,
        color: "pink",
      },
      {
        name: "NodeJS",
        icon: FaNodeJs,
        color: "green",
      },
      {
        name: "ExpressJS",
        icon: SiExpress,
        color: "grey",
      },
      {
        name: "YAML",
        icon: SiYaml,
        color: "red",
      },
    ],
    links: [
      {
        icon: FaGithub,
        href: "https://github.com/Zarrh/Chess-Ranking-Utility",
      }
    ],
  },
]

export const studies: Array<Study> = [
  {
    title: "Bachelor's degree in Mathematical Engineering",
    years: "2025 - Now",
    location: "Politecnico di Milano",
    lateralIcon: RiGraduationCapFill,
    link: "https://polimi.it/",
    text: "The degree in mathematical engineering mainly focuses on the applied side of maths. The studies are aimed to providing the capability of efficiently tackling engineering problems through the use of complex mathematical models."
  },
  {
    title: "High school degree",
    years: "2020 - 2025",
    location: "Liceo delle Scienze Applicate Marco Casagrande - Pieve di Soligo",
    degree: [100, 100],
    lateralIcon: FaBookReader,
    link: "https://isisspieve.edu.it/",
    text: "The applied sciences lyceum is meant to give the high school students a solid knowledge over the technology and science related topics. The school thus focuses on subjects like computer science, mathematics, physics and chemistry."
  },
]

export const techStack: Array<Technology> = [
  {
    name: "Python",
    icon: FaPython,
    color: "#1d7afa"
  },
  {
    name: "React",
    icon: DiReact,
    color: "aqua"
  },
  {
    name: "JavaScript",
    icon: FaJsSquare,
    color: "yellow"
  },
  {
    name: "TypeScript",
    icon: BiLogoTypescript,
    color: "dodgerblue"
  },
  {
    name: "HTML",
    icon: FaHtml5,
    color: "#f3850f"
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#5668e2"
  },
  {
    name: "Linux",
    icon: FaLinux,
    color: "gold"
  },
  {
    name: "Arduino",
    icon: SiArduino,
    color: "darkcyan"
  },
  {
    name: "Espressif",
    icon: SiEspressif,
    color: "#bb0a23"
  },
  {
    name: "LaTeX",
    icon: SiLatex,
    color: "teal"
  },
  {
    name: "MySQL",
    icon: DiMysql,
    color: "#08a997"
  },
  {
    name: "Flutter",
    icon: FaFlutter,
    color: "#0aa7d3"
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    color: "#1ac9e4"
  },
  {
    name: "Numpy",
    icon: SiNumpy,
    color: "#51beed"
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#dd7914"
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "dodgerblue"
  },
]

export const links: Array<Link> = [
  {
    text: "Studies",
    href: "#education",
  },
  {
    text: "Projects",
    href: "#projects",
  },
]

export const footerLinks: Array<IconLink> = [
  {
    icon: FaGithub,
    href: "https://github.com/Zarrh",
  }
]

export const languages: Array<Language> = [
  {
    name: "English",
    icon: EnglandFlag,
    level: "Advanced",
    levelEvaluation: 0.9,
  },
  {
    name: "Italiano",
    icon: ItalyFlag,
    level: "Native speaker",
    levelEvaluation: 1.0,
  },
  {
    name: "Français",
    icon: FranceFlag,
    level: "Basic",
    levelEvaluation: 0.3,
  }
]