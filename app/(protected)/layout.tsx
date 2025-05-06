import Navbar from "./components/Navbar"

const AdminLayout = ({children}: {children: React.ReactNode}) => {
    return (
    <div className="flex flex-col mb-[60px] overflow-y-scroll">
        <Navbar />
        {children}
    </div>
    )
}

export default AdminLayout