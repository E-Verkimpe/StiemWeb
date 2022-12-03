import { GameDto } from "./game-dto";

export interface CartOverviewDto {
    userId: string;
    games: GameDto[];
    totalPrice: number;
}