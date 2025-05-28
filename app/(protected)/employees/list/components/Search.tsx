import { IoIosSearch } from 'react-icons/io';
const Search = () => {
  return (
    <form className='group'>
      <div className="flex items-center justify-between w-full rounded-md bg-darkText border px-2 border-secondary/20 shadow-secondary/20 shadow-md">
        <input
          type="text"
          placeholder="Buscar empleado"
          className="w-full border-none rounded-lg"
          /* onChange={e => setFilterText(e.target.value)} */
        />
        <IoIosSearch className="text-2xl text-gray-400" />
      </div>
    </form>
  );
};

export default Search;
