import { BookOpen, Dumbbell, Home, Settings } from 'lucide-react'

import './Layout.css'

const NAV_ITEMS = [
    { key: 'home', label: 'Главная', Icon: Home },
    { key: 'training', label: 'Тренировки', Icon: Dumbbell },
    { key: 'lessons', label: 'Уроки', Icon: BookOpen },
    { key: 'settings', label: 'Настройки', Icon: Settings },
]

export default function Layout() {
    return (
        <nav className="site-footer">
            {NAV_ITEMS.map(({ key, Icon }) => (
                <button key={key} type="button" className="site-footer__item">
                    <Icon className="site-footer__icon" />
                </button>
            ))}
        </nav>
    )
}
