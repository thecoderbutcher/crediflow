
import { IoIosSearch } from "react-icons/io";
const Search = () => {
    return (
        <form>
            <div className="flex items-center rounded-md bg-darkText border px-2 border-primary/50 shadow-md">
                <input type="text" placeholder="Buscar cliente" className="focus:outline-none border-none rounded-lg" />
                <IoIosSearch className="text-2xl text-gray-400" />
            </div>  
        </form>
    )
}

export default Search