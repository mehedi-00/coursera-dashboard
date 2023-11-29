import SchoolIcon from '@mui/icons-material/School';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PieChartIcon from '@mui/icons-material/PieChart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DateRangeIcon from '@mui/icons-material/DateRange';
export const navItems = [
     {
          icon: <AssignmentTurnedInIcon/>,
          label: "Project",
          path : "/project"
     },
     {
          icon: <SchoolIcon/>,
          label: "Analytics",
          path : "/analytics"
     },
     {
          icon: <PieChartIcon/>,
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
          label: "E-commerce",
          subMenu: [
               {
                    label: "product",
                    path : '/product'
               },
               {
                    label: "new product",
                    path : '/newProduct'
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
          label: "Academic",
          path : "/academic"
     },

]