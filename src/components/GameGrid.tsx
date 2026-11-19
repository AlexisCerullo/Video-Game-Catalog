import type { Game } from '../types/game';
import { GameCard } from './GameCard';

interface GameGridProps {
    games: Game[];
}

export const GameGrid = ({ games }: GameGridProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {games.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    );
}