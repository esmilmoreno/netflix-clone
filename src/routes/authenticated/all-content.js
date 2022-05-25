import FetuaturedSection from "../../components/authenticated/featured-section"
import { movies } from "../../api"

export default function AllContent() {
  return (
    <div>
      <FetuaturedSection movie={movies[0]} />
    </div>
  )
}