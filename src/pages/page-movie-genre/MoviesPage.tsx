import Navbar from "../../components/navigation/navbar";
import PageLayoutSpecial from "../../components/layout/pageLayoutSpecial";
import { useParams} from "react-router";

function MoviesPage() {
  const { params } = useParams<{ params: string }>()
  
 
  return ( <>
      <Navbar/>
      <PageLayoutSpecial classSpecial="bg-amber-400">
        <h1 className="text-xl capitalize">{params}</h1>
      </PageLayoutSpecial>
    </> 
  );
}

export default MoviesPage;

