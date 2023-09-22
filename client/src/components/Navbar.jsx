import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <>
            <h1>React mysql</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/new">Create Task</Link>
                </li>
            </ul>
        </>
    )
}
