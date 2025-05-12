
import { IoIosSearch } from "react-icons/io";
import { useCustomersStore } from "../store/customerStore";
const Search = () => {
    const { setFilterText } = useCustomersStore();
    return (
        <form>
            <div className="flex items-center justify-between w-full rounded-md bg-darkText border px-2 border-primary/50 shadow-md">
                <input type="text" placeholder="Buscar cliente" className="focus:outline-none border-none rounded-lg" onChange={(e) => setFilterText(e.target.value)}/>
                <IoIosSearch className="text-2xl text-gray-400" />
            </div>  
        </form>
    )
}

export default Search