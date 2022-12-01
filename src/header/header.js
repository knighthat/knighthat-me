import './header.css';

function addLink(name, link) {
    return (
        <li>
            <a
                href={link}
                target='noopener'
            >
                {name}
            </a>
        </li>
    );
}

export default function Header() {
    return (
        <div className='knight-hat-gaming-header'>
            <b>
                {addLink("Trang chủ", "https://knighthat.me/")}
                {addLink("Videos", "https://www.youtube.com/@KnightHat")}
                {addLink("Blogs", "https://blogs.knighthat.me/")}
            </b>
        </div>
    );
}
