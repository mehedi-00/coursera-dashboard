import SchoolIcon from '@mui/icons-material/School';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PieChartIcon from '@mui/icons-material/PieChart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import GroupsIcon from '@mui/icons-material/Groups';
import ChatIcon from '@mui/icons-material/Chat';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SupportIcon from '@mui/icons-material/Support';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import { AccountCircleOutlined, EditNoteOutlined } from '@mui/icons-material';
export const navItems = [
     {
          icon: <AssignmentTurnedInIcon/>,
          label: "Project",
          path : "/project"
     },
     {
          icon: <PieChartIcon/>,
          label: "Analytics",
          path : "/analytics"
     },
     {
          icon: <BackupTableIcon/>,
          label: "Finance",
          path : "/finance"
     },
     {
          icon: <CurrencyExchangeIcon/>,
          label: "Crypto",
          path : "/crypto"
     },
     {
          icon: <SchoolIcon/>,
          label: "Academic",
          path : "/academic"
     },
     {
          icon: <DateRangeIcon/>,
          label: "Calender",
          path : "/calender"
     },
     {
          icon: <ChatIcon/>,
          label: "Chat",
          path : "/chat"
     },
     {
          icon: <GroupsIcon/>,
          label: "Contact",
          path : "/contact"
     },
     {
          icon: <AddShoppingCartIcon/>,
          label: "E-commerce",
          subMenu: [
               {
                    label: "product",
                    path : '/product'
               },
               {
                    label: "new product",
                    path : '/ecommerce/new-product'
               },
               {
                    label: "product detail",
                    path : '/productDetail'
               },
               {
                    label: "order",
                    path : '/order'
               }
          ]
     },
     {
          icon: <CloudQueueIcon/>,
          label: "File Manager",
          path : "/fileManager"
     },
     {
          icon: <SupportIcon/>,
          label: "Help Center",
          subMenu: [
               {
                    label: "Home",
                    path : '/home'
               },
               {
                    label: "FQAs",
                    path : '/fqas'
               },
               {
                    label: "Guide",
                    path : '/guide'
               },
               {
                    label: "Support",
                    path : '/support'
               }
          ]
     },
     {
          icon : <MailOutlineIcon/>,
          label: "Mail",
          path : "/mail"
     },
     {
          icon : <EditNoteOutlined/>,
          label: "Note",
          path : "/note"
     },
     {
          icon : <CalendarViewWeekIcon/>,
          label: "Scrumboard",
          path : "/Scrumboard"
     },
     {
          icon : <FileDownloadDoneIcon/>,
          label: "Task",
          path : "/task"
     },
     {
          icon : <AccountCircleOutlined/>,
          label: "Profile",
          path : "/profile"
     },
     {
          icon : <AccountCircleOutlined/>,
          label: "Active",
          path : "/active"
     },
     {
          icon: <SupportIcon/>,
          label: "Authentication",
          subMenu: [
               {
                    label: "Sign in",
                    path : '/signIn'
               },
               {
                    label: "Sign Up",
                    path : '/signUp'
               },
               {
                    label: "Sign Out",
                    path : '/signOut'
               },
               {
                    label: "Forgot Password",
                    path : '/forgotPassword'
               },
               {
                    label: "Reset Password",
                    path : '/resetPassword'
               },
               {
                    label: "Unlock Session",
                    path : '/unlockSession'
               },
               {
                    label: "Confirmation Required",
                    path : '/confirmationRequired'
               },
          ]
     },
     {
          icon: <SupportIcon/>,
          label: "Coming Soon",
          subMenu: [
               {
                    label: "Classic",
                    path : '/classic'
               },
               {
                    label: "Modern",
                    path : '/modern'
               },
               {
                    label: "Modern Reversed",
                    path : '/modernReversed'
               },
               {
                    label: "Split Screen",
                    path : '/splitScreen'
               },
               {
                    label: "Split Screen Reversed",
                    path : '/resetPasswordReversed'
               },
               {
                    label: "Full Screen",
                    path : '/fullScreen'
               },
               {
                    label: "Full Screen Reversed",
                    path : '/fullScreenReversed'
               },
          ]
     },
     {
          icon: <SupportIcon/>,
          label: "Error",
          subMenu: [
               {
                    label: "404",
                    path : '/404'
               },
               {
                    label: "500",
                    path : '/500'
               },
          ]
     },
     {
          icon: <SupportIcon/>,
          label: "Invoice",
          subMenu: [
               {
                    label: "Printable",
                    path : '/printable'
               },
          ]
     },
     {
          icon : <AccountCircleOutlined/>,
          label: "Maintenance",
          path : "/maintenance"
     },
     {
          icon: <SupportIcon/>,
          label: "Pricing",
          subMenu: [
               {
                    label: "Modern",
                    path : '/modern'
               },
               {
                    label: "Simple",
                    path : '/simple'
               },
               {
                    label: "Single",
                    path : '/single'
               },
               {
                    label: "Table",
                    path : '/table'
               },
          ]
     },
     {
          icon: <SupportIcon/>,
          label: "Search",
          subMenu: [
               {
                    label: "Classic Search",
                    path : '/classicSearch'
               },
               {
                    label: "Modern Search",
                    path : '/modernSearch'
               },
          ]
     },
     {
          icon : <AccountCircleOutlined/>,
          label: "Tailwind Css",
          path : "/tailwindCss"
     },
     {
          icon: <SupportIcon/>,
          label: "Icons",
          subMenu: [
               {
                    label: "Heroicons Outline",
                    path : '/heroiconsOutline'
               },
               {
                    label: "Heroicons Solid",
                    path : '/heroiconsSolid'
               },
               {
                    label: "Material Twotone",
                    path : '/materialTwotone'
               },
               {
                    label: "Material Outline",
                    path : '/materialOutline'
               },
               {
                    label: "Feather",
                    path : '/feather'
               },
          ]
     },
     {
          icon: <SupportIcon/>,
          label: "Page Layout",
          subMenu: [
               {
                    label: "Overview",
                    path : '/overview'
               },
               {
                    label: "Carded",
                    subMenu: [
                         {
                              label: "Full Width",
                              path : '/fullWidth'
                         },
                         {
                              label: "Width Sidebar",
                              path : '/widthSidebar'
                         },
                    ]
               },
               {
                    label: "Simple",
                    subMenu: [
                         {
                              label: "Full Width",
                              path : '/fullWidth'
                         },
                         {
                              label: "Width Sidebar",
                              path : '/widthSidebar'
                         },
                    ]
               },
               {
                    label: "Empty Page",
                    path : '/emptyPage'
               },
          ]
     },
     {
          icon : <AccountCircleOutlined/>,
          label: "Typography",
          path : "/typography"
     },

]