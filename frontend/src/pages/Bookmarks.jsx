import { Link } from "react-router"

export const Bookmarks = () => {
  return (
    <div>
      <h2>Bookmarked entries</h2>
      <ul>
        <li>
          <Link to="/entries/1">Sample Entry 1</Link>
        </li>
      </ul>
    </div>
  )
}
