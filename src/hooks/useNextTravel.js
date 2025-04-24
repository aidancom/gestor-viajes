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
      const today = dateWithoutHours(new Date());
      const futureTravels = travelsData.filter(item => dateWithoutHours(item?.general?.travelDepartureDate) >= today);
      const sortedTravels = futureTravels.sort((a, b) => {return dateWithoutHours(a?.general?.travelDepartureDate) - dateWithoutHours(b?.general?.travelDepartureDate)})
      console.log(sortedTravels[0])
      setNextTravel(sortedTravels[0]);
    }
  }, [travelsData]);

  return {
    nextTravel
  };
};
