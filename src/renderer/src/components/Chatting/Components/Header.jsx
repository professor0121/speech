import React from 'react'
import style from './Header.module.css'
import { Video, Phone, Search } from 'lucide-react' // 👈 Example icon imports

const Header = () => {
    return (
        <div className={style.chatHeader}>
            <div className={style.profileSection}>
                <img src='https://placehold.co/60x60' alt="User avatar" />
                <div className={style.profileInfo}>
                    <p>Name</p>
                    <p>Last seen/active</p>
                </div>
            </div>
            <div className={style.iconSection}>
                <div>
                    <Video size={20} />
                    <Phone size={20} />
                </div>
                <div><Search size={20} /></div>
            </div>
        </div>
    )
}

export default Header
