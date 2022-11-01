import buttons from './button.module.css'
import { Link } from "react-router-dom";

const ButtonLink = ({ onClick, children, className = "", src = "#" }) => {
    return (
        <>
            <button
                className={`${buttons.button} ${className}`}
                onClick={onClick}>
                <Link
                    to={src}
                >
                    {children}
                </Link>
            </button>
        </>
    );
}
export default ButtonLink;