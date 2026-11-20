import { useState, type ChangeEvent, type SubmitEvent } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [query, setQuery] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form className="flex items-center gap-2" onSubmit={ handleSubmit }>
            <input
                type="text"
                value={query}
                onChange= {handleChange}
                placeholder="Search games..."
                className="bg-zinc-950 text-zinc-100 placeholder:text-zinc-500 border border-zinc-700 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-zinc-600"
            />
            <button type="submit" className="bg-emerald-600 text-white hover:bg-emerald-500 focus:outline-none focus:ring focus:ring-emerald-600 px-4 py-2 rounded-lg cursor-pointer">Search</button>
        </form>
    )};