import { useState } from "react"
import style from "./Sidebar.module.css"
import { Menu, Phone, Circle, MessageCircleMore } from 'lucide-react' // ✅ added missing icons

const chatView = [
    { title: "Chats", icon: MessageCircleMore },
    { title: "Calls", icon: Phone },   // ✅ use 'Phone' for Calls
    { title: "Status", icon: Circle }, // ✅ use 'Circle' or 'Activity' for Status
]

const members = [
    { email: "alice@example.com", bio: "Loves frontend design." },
    { email: "bob@example.com", bio: "Backend engineer at TechX." },
    { email: "carol@example.com", bio: "Building mobile apps." },
    { email: "dave@example.com", bio: "Fullstack wizard." },
    { email: "eve@example.com", bio: "Cybersecurity enthusiast." },
    { email: "frank@example.com", bio: "DevOps specialist." },
    { email: "grace@example.com", bio: "Passionate about AI/ML." },
    { email: "heidi@example.com", bio: "Writes clean React code." },
    { email: "ivan@example.com", bio: "Docker and Kubernetes fan." },
    { email: "judy@example.com", bio: "Always in dark mode." },
    { email: "kyle@example.com", bio: "Angular + TypeScript expert." },
    { email: "laura@example.com", bio: "Designs with Figma." },
    { email: "mallory@example.com", bio: "Loves hacking APIs." },
    { email: "ned@example.com", bio: "Enjoys serverless functions." },
    { email: "olivia@example.com", bio: "Tech blogger & speaker." },
    { email: "peggy@example.com", bio: "Loves data visualization." },
    { email: "quinn@example.com", bio: "Swift + iOS lover." },
    { email: "rudy@example.com", bio: "Makes JavaScript magic." },
    { email: "sybil@example.com", bio: "Exploring blockchain tech." },
    { email: "trent@example.com", bio: "Rustacean & system dev." },
];

const Sidebar = () => {
    const [isActive, setisActive] = useState(false)
    console.log(isActive)
    return (
        <div className={style.sidebarComponent}>
            <div className={`${style.sideToggler} ${isActive ? style.sideTogglerExpanded : ''}`}>
                <div><Menu
                    onClick={() => setisActive(!isActive)}
                /></div>
                <div className={`${style.collectionChatView} ${isActive ? style.collectionChatViewOpen : ''}`}>
                    {chatView.map((item, index) => (
                        <div key={index} className={`${style.menuItem} ${isActive ? style.menuItemOpen : ''}`}>
                            <item.icon size={20} />
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={style.mainContainer}>
                <div className={style.headerSection}>
                    <h1 className={style.headTitle}>Chats</h1>
                    <div className={style.headIcons}>
                        <p>b1</p>
                        <p>b1</p>
                    </div>
                </div>
                <div className={style.chattingMembers}>
                    {members.map((member, idx) => (
                        <div key={idx} className={style.memberChatting}>
                            <img src={`https://placehold.co/60x60?text=${member.email.charAt(0).toUpperCase()}`} alt={member.email} />
                            <div className={style.memberDetails}>
                                <p>{member.email}</p>
                                <p>{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Sidebar