import "./style.css";

interface IParticipants {
	name: string;
	RA: string;
	Turma: string;
}

const Footer = () => {
	const participants: IParticipants[] = [
		{ name: "Mateus Siqueira Carneiro", RA: "111824", Turma: "Noturno" },
		{ name: "Luis Henrique Pires Damy", RA: "150009", Turma: "Noturno" },
		{
			name: "Fábio Lorran de Almeida Sandoval",
			RA: "150969",
			Turma: "Noturno",
		},
		{ name: "Isabela Cristina Pedro", RA: "141658", Turma: "Noturno" },
		{ name: "Magno Luiz Gonçalves Melo", RA: "133688", Turma: "Noturno" },
	];

	return (
		<footer className="App-footer">
			<h2>Lista de Participantes:</h2>
			<ul>
				{participants.map((participant, index) => (
					<li key={index}>
						{participant.name} - {participant.RA}
					</li>
				))}
			</ul>
		</footer>
	);
};

export { Footer };
