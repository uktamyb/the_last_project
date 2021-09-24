import { ReactComponent as buyurtmalar } from "../assets/icons/Buyurtmalar/buyurtmalar.svg";
import { ReactComponent as maxsulotlar } from "../assets/icons/Buyurtmalar/maxsulotlar.svg";
import { ReactComponent as kategoriyalar } from "../assets/icons/Buyurtmalar/kategoriyalar.svg";
import { ReactComponent as filiallar } from "../assets/icons/Buyurtmalar/filiallar.svg";
import { ReactComponent as mijozlar } from "../assets/icons/Buyurtmalar/mijozlar.svg";
import { FiBarChart2 } from "react-icons/fi";
// import { ReactComponent as xisobot } from "../assets/icons/Buyurtmalar/xisobot.svg";

import { ReactComponent as xodimlar } from "../assets/icons/Buyurtmalar/tizim_sozlamalar.svg";
import { ReactComponent as katalog } from "../assets/icons/Buyurtmalar/tizim_sozlamalar.svg";

export const sidebar = [
  {
    id: 1,
    title: "Buyurtmalar",
    path: "/buyurtmalar",
    Icon: buyurtmalar,
    Component: "",
    hidden: false
  },
  {
    id: 2,
    title: "Maxsulotlar",
    path: "/maxsulotlar",
    Icon: maxsulotlar,
    Component: "",
    hidden: false
  },
  {
    id: 3,
    title: "Kategoriyalar",
    path: "/kategoriyalar",
    Icon: kategoriyalar,
    Component: "",
    hidden: false
  },
  {
    id: 4,
    title: "Filiallar",
    path: "filiallar",
    Icon: filiallar,
    Component: "",
    hidden: false
  },
  {
    id: 5,
    title: "Mijozlar",
    path: "/mijozlar",
    Icon: mijozlar,
    Component: "",
    hidden: false
  },
  {
    id: 6,
    title: "Xisobot",
    path: "/xisobot",
    Icon: FiBarChart2,
    Component: "",
    hidden: false
  },
  {
    id: 7,
    title: "Xodimlar",
    path: "/xodimlar",
    Icon: xodimlar,
    Component: "",
    hidden: false
  },
  {
    id: 8,
    title: "Katalog",
    path: "/katalog",
    Icon: katalog,
    Component: "",
    hidden: false
  }
];
