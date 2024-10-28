import {
  IoHome,
  IoCartSharp,
  IoPersonOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import {
  AiFillDatabase,
  AiFillPicture,
  AiOutlineSpotify,
} from "react-icons/ai";
import { TbCategory2, TbWorld } from "react-icons/tb";
import {
  FaHeadset,
  FaKey,
  FaNetworkWired,
  FaStar,
  FaWallet,
  FaWarehouse,
} from "react-icons/fa";
import { IoIosNotifications, IoMdPerson } from "react-icons/io";
import {
  MdBarChart,
  MdGroups2,
  MdHealthAndSafety,
  MdOutlineBarChart,
  MdOutlineFolderZip,
} from "react-icons/md";
import { FaMessage, FaMicrophoneLines } from "react-icons/fa6";
import { CiInboxOut } from "react-icons/ci";
import {
  BsFillPersonFill,
  BsReverseLayoutSidebarInsetReverse,
} from "react-icons/bs";
import { GrGallery } from "react-icons/gr";

import { CgNotes } from "react-icons/cg";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { ImStatsBars } from "react-icons/im";

export const sidebarItems = [
  {
    title: "Dashboard",
    SubHeading: "Overview",
    icon: <IoHome />,
    link: "/",
    isDropdown: false,
  },
  {
    title: "Orders",
    SubHeading: "Order management",
    icon: <IoCartSharp />,
    isDropdown: true,
    subItems: [
      { title: "All Orders", link: "/allorders" },
      { title: "Pending Orders", link: "/pendingorder" },
      { title: "Confirmed Orders", link: "/confirmedorder" },
      { title: "Packaging Orders", link: "/packagingorder" },
      { title: "Out for Delivery", link: "/outfordelivery" },
      { title: "Delivered Orders", link: "/deliveredorder" },
      { title: "Returned Orders", link: "/returnedorder" },
      { title: "Failed to Deliver", link: "/failedorder" },
      { title: "Canceled", link: "/cancel" },
    ],
  },
  {
    title: "Refund Requests",
    icon: <CgNotes />,
    isDropdown: true,
    subItems: [
      { title: "Pending Requests", link: "/pendingrefundrequests" },
      { title: "Approved Requests", link: "/approverefundrequests" },
      { title: "Refunded", link: "/refunded" },
      { title: "Rejected", link: "/rejected" },
    ],
  },

  {
    title: "Categories Setup",
    SubHeading: "Product management",
    icon: <TbCategory2 />,
    isDropdown: true,
    subItems: [
      { title: "Categories", link: "/categories" },
      { title: "Subcategories", link: "/subcategories" },
      { title: "Sub Subcategories", link: "/subsubcategories" },
    ],
  },

  {
    title: "Brand",
    icon: <FaStar />,
    isDropdown: true,
    subItems: [
      { title: "Add New", link: "/addnewbrand" },
      { title: "List", link: "/brandlist" },
    ],
  },
  {
    title: "Product Attribute Setup",
    icon: <FaNetworkWired />,
    link: "/productattributesetup",
    isDropdown: false,
  },
  {
    title: "In-house Products",
    icon: <FaWarehouse />,
    isDropdown: true,
    subItems: [
      { title: "Product List", link: "/inhouseproductlist" },
      { title: "Add New Product", link: "/inhouseaddproduct" },
      { title: "Bulk Import", link: "/bulkimport" },
    ],
  },

  {
    title: "Vendor",
    SubHeading: "Vendors management",
    icon: <FaWallet />,
    isDropdown: true,
    subItems: [
      { title: "Vendor List", link: "/venderlist" },
      { title: "Add Vendor", link: "/addvenderform" },
      { title: "Vendor Wallet", link: "/addvenderwallet" },
      { title: "Vendor Wallet Method", link: "/addvenderwalletmethod" },
    ],
  },
  {
    title: "Vendor Products",
    icon: <AiOutlineSpotify />,
    isDropdown: true,
    subItems: [
      // { title: "New Products Requests", link: "/vendernew" },
      { title: "New Product Requests", link: "/venderpendingproduct" },
      { title: "Approved Products", link: "/venderapprove" },
      { title: "Denied Products", link: "/venderdenied" },
    ],
  },

  // {
  //   title: "Product Gallery",
  //   icon: <GrGallery />,
  //   link: "/productgallery",
  //   isDropdown: false,
  // },

  {
    SubHeading: "Promotion management",
    title: "Banner Setup",

    icon: <AiFillPicture />,
    link: "/bannersetup",
    isDropdown: false,
  },

  {
    title: "Offers & Deals",
    icon: <BsFillPersonFill />,
    isDropdown: true,
    subItems: [
      { title: "Coupon", link: "/coupon" },
      { title: "Flash Deals", link: "/flashdeals" },
      { title: "Deal Of The Day", link: "/dealofday" },
      { title: "Featured Deal", link: "/featuredeal" },
    ],
  },

  {
    title: "Notifications",
    icon: <IoIosNotifications />,
    isDropdown: true,
    subItems: [
      { title: "Send Notifications", link: "/sendnotification" },
      { title: "Push Notifications Setup", link: "/pushnotification" },
    ],
  },

  {
    title: "Announcement",

    icon: <FaMicrophoneLines />,
    link: "/announcement",
    isDropdown: false,
  },

  {
    title: "Help and Support",
    isDropdown: true,
    icon: <MdHealthAndSafety />,
    subItems: [
      {
        title: "Inbox",
        icon: <CiInboxOut />,
        link: "/indexmessage",
      },
      {
        title: "Messages",
        icon: <FaMessage />,
        link: "/messagesupport",
      },
      {
        title: "Support Ticket",
        icon: <FaHeadset />,
        link: "/ticketsupport",
      },
    ],
  },

  {
    SubHeading: "Reports & Analysis",
    title: "Sales & Transaction",
    icon: <MdBarChart />,
    isDropdown: true,
    subItems: [
      { title: "Earning Report", link: "/earningreport" },
      { title: "Inhouse Sales", link: "/inhousesales" },
      { title: "Vendor Sales", link: "/vendersale" },
      { title: "Transaction Report", link: "/transactionrepo" },
    ],
  },

  {
    title: "Product Report",
    icon: <MdOutlineBarChart />,
    link: "/productreport",
    isDropdown: false,
  },
  {
    title: "Order Report",
    icon: <ImStatsBars />,
    link: "/orderreport",
    isDropdown: false,
  },

  {
    title: "Customers",
    SubHeading: "Customer management",
    icon: <MdOutlineFolderZip />,
    isDropdown: true,
    subItems: [
      { title: "Customers List", link: "/customerlist" },
      { title: "Customers Review", link: "/customerreviews" },
      { title: "Wallet", link: "/walletmanagement" },
      { title: "Wallet Bonus Setup", link: "/customerbonussetup" },
      { title: "Loyalty Points", link: "/customerloyaltyreport" },
    ],
  },
  {
    title: "Delivery Man",
    icon: <MdGroups2 />,
    isDropdown: true,
    subItems: [
      { title: "Add New", link: "/addnewdelivery" },
      { title: "List", link: "/deliverymanlist" },
      { title: "Withdraws", link: "/withdrawrequest" },
      { title: "Emergency Contact", link: "/emergencycontact" },
    ],
  },
  {
    title: "Employees",
    SubHeading: "Employee management",
    icon: <IoPersonOutline />,
    isDropdown: true,
    subItems: [
      { title: "Employee Role Setup", link: "/employeerolesetup" },
      { title: "Employees", link: "/employeelist" },
    ],
  },
  {
    title: "Subscribers",
    SubHeading: "Subscriber",
    icon: <IoMdPerson />,
    link: "/subscriberlist",
    isDropdown: false,
  },

  {
    title: "Business Setup",
    SubHeading: "Business Setup",
    icon: <TbWorld />,
    isDropdown: true,
    subItems: [
      { title: "Business Setup", link: "/businesssetup" },
      // { title: "Business Setup", link: "/appsettings" },
      { title: "Inhouse Shop", link: "/businessinhouse" },
    ],
  },
  {
    title: "System settings",
    SubHeading: "System Setup",

    icon: <IoSettingsOutline />,
    isDropdown: true,
    subItems: [
      { title: "System Settings", link: "/systemsetups" },
      { title: "Login Settings", link: "/loginsetups" },
      // { title: "Themes & Addons", link: "/theemsetup" },
    ],
  },
  {
    title: "3rd Party",
    icon: <FaKey />,
    isDropdown: true,
    subItems: [
      { title: "Payment Methods", link: "/thirdparty" },
      { title: "Other Configurations", link: "/otherconfiguration" },
    ],
  },
  {
    title: "Pages & Media",
    icon: <BsReverseLayoutSidebarInsetReverse />,
    isDropdown: true,
    subItems: [
      { title: "Social Media Links", link: "/pagesocialmedia" },
      { title: "Gallery", link: "/pagegallery" },
      { title: "Vendor Registration", link: "/pagemedia" },
    ],
  },
];
