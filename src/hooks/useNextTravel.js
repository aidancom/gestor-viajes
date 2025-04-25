import { useEffect, useState } from "react";

export const useNextTravel = (travelsData) => {
  const [nextTravel, setNextTravel] = useState(null);

  const dateWithoutHours = (date) => {
    const deleteHours = new Date(date);
    deleteHours.setHours(0, 0, 0, 0);
    return deleteHours;
  };

  useEffect(() => {
    if (travelsData.lenght !== 0) {
      const sortedTravels = travelsData.sort((dateA, dateB) => {return dateWithoutHours(dateA?.general?.travelDepartureDate) - dateWithoutHours(dateB?.general?.travelDepartureDate)})
      setNextTravel(sortedTravels[0]);
    }
  }, [travelsData]);

  return {
    nextTravel
  };
};
