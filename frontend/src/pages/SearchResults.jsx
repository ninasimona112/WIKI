import { Link } from "react-router"

export const SearchResults = () => {
  return (
    <div>
      <h2>Search results</h2>
      <ul>
        <li>
          <Link to="/entries/1">Sample Entry 1</Link>
        </li>
        <li>
          <Link to="/entries/2">Sample Entry 2</Link>
        </li>
        <li>
          <Link to="/entries/3">Sample Entry 3</Link>
        </li>
      </ul>
    </div>
  )
}
