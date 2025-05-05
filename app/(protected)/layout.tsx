import Navbar from "./components/Navbar"

const AdminLayout = ({children}: {children: React.ReactNode}) => {
    return (
    <div className="flex flex-col h-screen bg-secondary/20">
        <Navbar />
        {children}
    </div>
    )
}

export default AdminLayout