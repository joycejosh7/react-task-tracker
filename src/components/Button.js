

const Button = ({color, text}) => {
    const onClick = () => {

    }
    return (
        <button 
            onClick={onClick} 
            style={{ backgroundColor: color }} className='btn'
        >
            { text }
        </button>
    )
}

export default Button
