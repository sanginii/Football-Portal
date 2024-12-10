import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
export const ClubsContext = createContext();

// Create a provider component
export const ClubsProvider = ({ children }) => {
  const [clubsData, setClubsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClubsData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/scrape/clubs"); // Adjust the URL as necessary
        setClubsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching clubs data:", error);
        setLoading(false);
      }
    };
    fetchClubsData();
  }, []);

  return (
    <ClubsContext.Provider value={{ clubsData, loading }}>
      {children}
    </ClubsContext.Provider>
  );
};
