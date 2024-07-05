import {BarChart4, Building2, PanelsTopLeft, CircleHelpIcon, Calendar} from 'lucide-react'

export const dataGeneralSidebar = [
    {
        icon: PanelsTopLeft,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Building2,
        label: "Companies",
        href: "/companies",
    },
    {
        icon: Calendar,
        label: "Calendar",
        href: "/tasks",
    }
]

export const datatToolsSidebar = [
    {
        icon: CircleHelpIcon,
        label: "Faqs",
        href: "/faqs",
    },
    {
        icon: BarChart4,
        label: "Analytics",
        href: "/analytics",
    }
]
