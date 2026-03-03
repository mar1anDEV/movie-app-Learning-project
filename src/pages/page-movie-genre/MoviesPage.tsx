import Navbar from "../../components/navigation/navbar";
import PageLayoutSpecial from "../../components/layout/pageLayoutSpecial";
import { useLocation } from "react-router";

function MoviesPage() {
  const location = useLocation().pathname
  return ( <>
      <Navbar/>
      <PageLayoutSpecial classSpecial="bg-amber-400"></PageLayoutSpecial>
    </> 
  );
}

export default MoviesPage;

