import type { Game } from '../types/game';

interface GameCardProps {
    game: Game;
}

const getMetacriticColor = (score: number) => {
    if (score >= 75) return 'bg-green-500/10 text-green-400 border-green-500/20';
    if (score >= 50) return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
    return 'bg-red-500/10 text-red-400 border-red-500/20';
};

export const GameCard = ({ game }: GameCardProps) => {
    return (
        <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg border border-zinc-800">
            {game.background_image ? (
                <img src={game.background_image} alt={game.name} className="w-full h-48 object-cover" />) : (
                <div className="w-full h-48 bg-zinc-800 flex items-center justify-center">
                    <span className="text-zinc-500">No Image</span>
                </div>
            )}
            <h2 className="text-lg font-semibold p-4">{game.name}</h2>
            <h3 className="text-sm text-zinc-400 px-4 pb-2">{game.released ? `Released: ${game.released}` : 'Release date unknown'}</h3>
            {game.metacritic !== null && (
                <div className={`text-xs font-semibold px-2 py-1 rounded-md m-4 border ${getMetacriticColor(game.metacritic)}`}>
                    Metacritic: {game.metacritic}
                </div>
            )}
            <div className="flex flex-wrap gap-2 mt-2">
            {game.genres.map((genre) => (
                <span key={genre.id} className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md">
                    {genre.name}
                </span>
            ))}
            </div>
            <div className="flex gap-2 text-zinc-400 text-sm mt-1">
            {game.parent_platforms.map((parentPlatform) => (
                <span key={parentPlatform.platform.id} className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md">
                    {parentPlatform.platform.name}
                </span>
            ))}
            </div>
        </div>
    );
};