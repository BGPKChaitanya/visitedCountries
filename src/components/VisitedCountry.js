const VisitedCountry = (props) => {
  const { tour, removeCountry } = props;
  const { name, imageUrl } = tour;
  const notVisitedCountry = () => {
    removeCountry(tour);
  };
  return (
    <div>
      <img src={imageUrl} alt="thumbnail" />
      <p>{name}</p>
      <button type="button" onClick={notVisitedCountry}>
        Remove
      </button>
    </div>
  );
};

export default VisitedCountry;
