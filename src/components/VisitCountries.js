import { useState } from "react";
import Country from "./Country";
import VisitedCountry from "./VisitedCountry";

const VisitCountries = (props) => {
  const { list } = props;
  const [initialList, setInitialList] = useState(list);
  const newCountryList = list.filter((c) => c.isVisited === true);
  const [visitedList, setVisitedList] = useState(newCountryList);
  console.log(initialList);

  const visitedCountryList = (country) => {
    const removedCountry = initialList.filter((c) => c.id === country.id);
    const removedCountryList = initialList.filter((c) => c.id !== country.id);
    removedCountry[0].isVisited = true;
    const newList = [...removedCountryList, removedCountry[0]];
    setInitialList(newList);
    setVisitedList([...visitedList, country]);
  };

  const removeCountry = (country) => {
    const { id } = country;
    const removedCountry = initialList.filter((c) => c.id === country.id);
    const removedCountryList = initialList.filter((c) => c.id !== country.id);
    removedCountry[0].isVisited = false;
    const newList = [...removedCountryList, removedCountry[0]];
    setInitialList(newList);
    setVisitedList(visitedList.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {initialList.map((country) => (
          <li key={country.id}>
            <Country
              country={country}
              visitedCountryList={visitedCountryList}
            />
          </li>
        ))}
      </ul>
      <h1>Visited Countries</h1>
      <ul>
        {visitedList.length === 0 ? (
          <p>No Countries Visited Yet</p>
        ) : (
          <div>
            {visitedList.map((tour) => (
              <li key={tour.id}>
                <VisitedCountry removeCountry={removeCountry} tour={tour} />
              </li>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default VisitCountries;
