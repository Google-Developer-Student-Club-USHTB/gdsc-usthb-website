const Button = ({title, link}) => {
    return (
        <button className="bg-gdsc-blue py-1.5 px-5 rounded-md capitalize font-semibold"
            style={{color: "white"}}
        >
            <a href={link} title={title}>{title}</a>
        </button>
    )
}

export default Button