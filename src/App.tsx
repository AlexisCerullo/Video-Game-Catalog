import './App.css'
import { GameGrid } from './components/GameGrid';
import { SearchBar } from './components/SearchBar';
import { mockGames } from './data/game';

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Video Game Catalog</h1>
          <p className="text-zinc-400 text-sm mt-1">Explore a full collection of video games</p>
        </header>
        <SearchBar onSearch={(query) => console.log('Searching for:', query)} />
        <GameGrid games={mockGames.results} />
      </div>
    </div>
  )
}

export default App
