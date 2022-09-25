import { useState } from "react";
// import CountryContext from '../context/CountryContext'
const Country = (props) => {
  const { country, visitedCountryList } = props;
  const { name, isVisited } = country;
  const [isVisit, changeIsVisited] = useState(false);

  const visitChange = () => {
    changeIsVisited(!isVisit);
    visitedCountryList(country);
  };

  return (
    <div>
      <p>{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button type="button" onClick={visitChange}>
          Visit
        </button>
      )}
    </div>
  );
};

export default Country;
