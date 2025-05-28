import { IoIosSearch } from 'react-icons/io';
const Search = () => {
  return (
    <form>
      <div className="flex w-full items-center rounded-md bg-darkText border px-2 border-primary/50 shadow-secondary/20 shadow-md">
        <input
          type="text"
          placeholder="Buscar prestamo"
          className="focus:outline-none border-none rounded-lg"
        />
        <IoIosSearch className="text-2xl text-gray-400" />
      </div>
    </form>
  );
};

export default Search;
