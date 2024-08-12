import StarshipCard from "./StarshipCard";

const StarshipList = ({starships, searchTerm }) => {
  const filtered = starships.filter((starship) =>
    starship.name.includes(searchTerm)
  );

  return (
    <section>
      <h2>Starships</h2>
      {filtered.map((starship, idx) => (
        <StarshipCard key={idx} starship={starship} idx={idx} />
      ))}
    </section>
  );
};

export default StarshipList;