const Welcome = (props) => {
    const {name, surName, children} = props
    return (
        <div>
            <h1>Welcome, { name }! a.k.a { name } { surName }</h1>
            { children }
        </div>
    )
}

export default Welcome
