import {BarChart4, Building2, PanelsTopLeft, CircleHelpIcon, Calendar} from 'lucide-react'

export const dataGeneralSidebar = [
    {
        icon: PanelsTopLeft,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Building2,
        label: "Compañias",
        href: "/companies",
    },
    {
        icon: Calendar,
        label: "Calendario",
        href: "/tasks",
    }
]

export const datatToolsSidebar = [
    {
        icon: CircleHelpIcon,
        label: "Preguntas Frecuentes",
        href: "/faqs",
    },
    {
        icon: BarChart4,
        label: "Analiticas",
        href: "/analytics",
    }
]
