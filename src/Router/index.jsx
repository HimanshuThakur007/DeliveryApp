import Dashboard from "../MainPage/Dashboard";
import Activities from "../MainPage/Activities";
import Product from "../MainPage/Product/index";
import Customer from "../MainPage/Customer/Index"
import Sales from "../MainPage/sales";
import Profile from "../MainPage/Profile/index";
import Purchase from "../MainPage/Purchase/index";
import Report from "../MainPage/report";
import Users from "../MainPage/users";
import Settings from "../MainPage/settings"
import HomeThree from "../MainPage/Home/home3";
import HomeFoure from "../MainPage/Home/home4";
import HomeTwo from "../MainPage/Home/home2";
import IndexOne from "../MainPage/Home/home1";
import Drivers from "../MainPage/drivers"
import People from "../MainPage/People"
import Transaction from "../MainPage/Transaction"
import Tracking from "../MainPage/Tracking"
import Return from "../MainPage/Return/index";
// import ItemsRoute from "../Frontend/layout/ItemsRoute"

export default  [
  {
    path: "dashboard",
    component: Dashboard,
  },
  {
    path: "activities",
    component: Activities,
  },
  {
    path: "product/*",
    component: Product,
  },
  {
    path: "transaction/*",
    component: Transaction,
  },
  {
    path: "profile/*",
    component: Profile,
  },
  {
    path: "purchase/*",
    component: Purchase,
  },

  {
    path: "report/*",
    component: Report,
  },
  {
    path: "users/*",
    component: Users,
  },
  {
    path: "drivers/*",
    component: Drivers,
  },
  {
    path: "Customer/*",
    component: Customer,
  },
  {
    path: "Tracking/*",
    component: Tracking,
  },
  {
    path: "settings/*",
    component: Settings,
  },
  {
    path: "Sales/*",
    component: Sales,
  },
  {
    path: "return/*",
    component: Return,
  },
  {
    path: "index-three",
    component: HomeThree,
  },
  {
    path: "index-four",
    component: HomeFoure,
  },
  {
    path: "index-two",
    component: HomeTwo,
  },
  {
    path: "index-one",
    component: IndexOne,
  },
  {
    path: "people",
    component: People,
  },
  // {
  //   path: "items",
  //   component: ItemsRoute,
  // },
];
