import './App.css'
import { GameCard } from './components/GameCard';
import { mockGames } from './data/game';

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Video Game Catalog</h1>
          <p className="text-zinc-400 text-sm mt-1">Explore a full collection of video games</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockGames.results.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
