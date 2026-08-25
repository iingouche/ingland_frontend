import { BookOpen, Dumbbell, Home, Settings } from 'lucide-react'

import { NavLink, Outlet } from 'react-router-dom'

import './Layout.css'

const NAV_ITEMS = [
    { key: 'home', path: '/', Icon: Home },
    { key: 'training', path: '/Train', Icon: Dumbbell },
    { key: 'lessons', path: '/Libre', Icon: BookOpen },
    { key: 'settings', path: '/Profile', Icon: Settings },
]

export default function Layout() {
    return (
        <>
        <Outlet/>
        <nav className="site-footer">
            {NAV_ITEMS.map(({ key,path, Icon }) => (
                <NavLink
                    key={key}
                    to={path}
                    className={({ isActive }) =>
                    `site-footer__item${isActive ? ' active' : ''}`
                    }
                >
                    <Icon className="site-footer__icon" />
                </NavLink>
                    ))}
        </nav>
        </>
    )
}
