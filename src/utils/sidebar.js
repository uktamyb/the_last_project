import { ReactComponent as buyurtmalar } from "../assets/icons/Buyurtmalar/buyurtmalar.svg";
import { ReactComponent as maxsulotlar } from "../assets/icons/Buyurtmalar/maxsulotlar.svg";
import { ReactComponent as kategoriyalar } from "../assets/icons/Buyurtmalar/kategoriyalar.svg";
import { ReactComponent as filiallar } from "../assets/icons/Buyurtmalar/filiallar.svg";
import { ReactComponent as mijozlar } from "../assets/icons/Buyurtmalar/mijozlar.svg";
import { ReactComponent as xisobot } from "../assets/icons/Buyurtmalar/xisobot.svg";
import { ReactComponent as xodimlar } from "../assets/icons/Buyurtmalar/xodimlar.svg";
import { ReactComponent as katalog } from "../assets/icons/Buyurtmalar/katalog.svg";
import { ReactComponent as tizimSozlamalari } from "../assets/icons/Buyurtmalar/sozlamalar.svg";
import { ReactComponent as lavozimSozlamalari } from "../assets/icons/Buyurtmalar/sozlamalar.svg";
import { ReactComponent as bildirishnoma } from "../assets/icons/Buyurtmalar/bildirishnoma.svg";
import { ReactComponent as yetkazishNarxi } from "../assets/icons/Buyurtmalar/yetkazish.svg";
import { ReactComponent as shikoyatlar } from "../assets/icons/Buyurtmalar/shikoyatlar.svg";
import { ReactComponent as xarita } from "../assets/icons/Buyurtmalar/xarita.svg";
import Generic from "../pages/Generic";
import Buyurtmalar from "../pages/Buyurtmalar";

export const sidebar = [
  {
    id: 1,
    title: "Buyurtmalar",
    path: "/buyurtmalar",
    Icon: buyurtmalar,
    Component: Buyurtmalar,
    hidden: false
  },
  {
    id: 2,
    title: "Maxsulotlar",
    path: "/maxsulotlar",
    Icon: maxsulotlar,
    Component: Generic,
    hidden: false
  },
  {
    id: 3,
    title: "Kategoriyalar",
    path: "/kategoriyalar",
    Icon: kategoriyalar,
    Component: Generic,
    hidden: false
  },
  {
    id: 4,
    title: "Filiallar",
    path: "/filiallar",
    Icon: filiallar,
    Component: Generic,
    hidden: false
  },
  {
    id: 5,
    title: "Mijozlar",
    path: "/mijozlar",
    Icon: mijozlar,
    Component: Generic,
    hidden: false
  },
  {
    id: 6,
    title: "Xisobot",
    path: "/xisobot",
    Icon: xisobot,
    Component: Generic,
    hidden: false
  },
  {
    id: 7,
    title: "Xodimlar",
    path: "/xodimlar",
    Icon: xodimlar,
    Component: Generic,
    hidden: false
  },
  {
    id: 8,
    title: "Katalog",
    path: "/katalog",
    Icon: katalog,
    Component: Generic,
    hidden: false
  }
  // {
  //   id: 9,
  //   title: "Tizim sozlamalari",
  //   path: "/tizimSozlamalari",
  //   Icon: tizimSozlamalari,
  //   Component: "",
  //   hidden: false
  // },
  // {
  //   id: 10,
  //   title: "Lavozim sozlamalari",
  //   path: "/lavozimSozlamalari",
  //   Icon: lavozimSozlamalari,
  //   Component: "",
  //   hidden: false
  // },
  // {
  //   id: 11,
  //   title: "Bildirishnoma",
  //   path: "/bildirishnoma",
  //   Icon: bildirishnoma,
  //   Component: "",
  //   hidden: false
  // },
  // {
  //   id: 12,
  //   title: "YetkazishNarxi",
  //   path: "/yetkazishNarxi",
  //   Icon: yetkazishNarxi,
  //   Component: "",
  //   hidden: false
  // },
  // {
  //   id: 13,
  //   title: "Shikoyatlar",
  //   path: "/shikoyatlar",
  //   Icon: shikoyatlar,
  //   Component: "",
  //   hidden: false
  // },
  // {
  //   id: 14,
  //   title: "Xarita",
  //   path: "/xarita",
  //   Icon: xarita,
  //   Component: "",
  //   hidden: false
  // }
];
