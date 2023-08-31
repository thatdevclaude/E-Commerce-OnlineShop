import { BsLaptop, BsBook, BsTools } from "react-icons/bs";
import { IoShirtOutline, IoShirtSharp } from "react-icons/io5";
import { MdOutlineToys } from "react-icons/md";
import { RiHeartPulseLine, RiFireLine } from "react-icons/ri";
import { AiOutlineHome, AiOutlinePercentage } from "react-icons/ai";
import { BiFootball } from "react-icons/bi";

import { ImMobile } from "react-icons/im";
import { FiMonitor, FiHeadphones } from "react-icons/fi";

import { GiGreenhouse, GiLargeDress, GiPadlock } from "react-icons/gi";
import { FaBaby, FaBath, FaRedhat } from "react-icons/fa";

const menuItems = [
  {
    category: "tools",
    icon: BsTools,
    productsGroup: [
      {
        title: "tools",
        icon: BsTools,
        subtitles: [
          "chisel",
          "measuringTape",
          "crowbar",
          "spade",
          "trowel",
          "screwdriver",
          "hammer",

        ],
      },
    ],
  },
  {
    category: "plumbing",
    icon: FaBath,
    productsGroup: [
      {
        title: "plumbing",
        icon: FaBath,
        subtitles: ["wrench", "waterPumpPliers", "pipeCutter", "Plunger"],
      },
      
    ],
  },
   {
    category: "buildingMaterials",
    icon: GiGreenhouse,
    productsGroup: [
      {
        title: "buildingMaterials",
        icon: GiGreenhouse,
        subtitles: [
          "floor",
          "roofing",
          "tile",
          "insulation",
          "kitchen",
          "vent",
          "windows",
          "ceiling",
          "concrete",
          "deck",
          "stairs",
          "wall",]
      },
      
    ],
  },
  // { category: "padLock", icon: GiPadlock },
  // { category: "cosmetic", icon: RiHeartPulseLine },
  // { category: "home", icon: AiOutlineHome },
  // { category: "sport", icon: BiFootball },
  // { category: "stationery", icon: BsBook },
];

export default menuItems;

export const extraMenu = [
  { title: "offer", icon: AiOutlinePercentage, href: "/offers" },
  { title: "bestSells", icon: RiFireLine, href: "/" },
];
