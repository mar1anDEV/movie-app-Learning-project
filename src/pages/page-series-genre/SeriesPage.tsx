import Navbar from "../../components/navigation/navbar"
import PageLayoutSpecial from "../../components/layout/pageLayoutSpecial"
import { useParams} from "react-router";
function SeriesPage() {

  const {params} = useParams<{params : string}>()

  return (
    <>
      <Navbar/>
      <PageLayoutSpecial classSpecial="bg-blue-400">
        <h1 className="text-xl capitalize">{params}</h1>
      </PageLayoutSpecial>
    </>
  )
}

export default SeriesPage