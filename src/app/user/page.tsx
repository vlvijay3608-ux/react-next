export default function User() {
    return(
        <>
        <nav className="flex flex-row gap-8 list-now">
            <li className="hover: underline">
            <a href="/user/grid">Grid</a>
            </li>
            <li className="hover: underline">
                <a href="/user/grid">View</a>
                    </li>
            <li className="hover: underline">
                <a href="/user/grid">Create</a>
                </li>
        </nav>
        </>
    )
}