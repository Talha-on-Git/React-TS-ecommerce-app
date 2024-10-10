const Logout = () => {
    let isLoggedIn:boolean = localStorage.getItem('login') === 'true'
    const handleLogout = () => {
        isLoggedIn = localStorage.getItem('login') === 'false'
    }
    return(
    <button onClick={handleLogout} className="absolute right-6 border-white text-white border-2 p-2 rounded">Logout</button>
    )
}

export default Logout