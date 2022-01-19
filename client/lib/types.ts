export interface Team {
	area: string;
	team: string;
	seed: number;
	logo: string;
}

export interface Game {
	homeTeam: Team;
	awayTeam: Team;
	round: string;
}
