import './button.css'

interface ButtonProps{
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({text, onClick}):JSX.Element =>{
    return <div className="button-box">
        <button className="button" onClick={onClick}>{text}</button>
    </div>
}

export {Button}