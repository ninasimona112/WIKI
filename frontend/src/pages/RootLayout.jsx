import { NavLink, Outlet } from "react-router"

export const RootLayout = () => {
  return (
    <div className="container">
      <aside>
        <h1>Wiki 📔</h1>
        <form role="search">
          <input
            name="search"
            type="search"
            placeholder="Search"
          />
        </form>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "contrast" : "")}
                to="/entries"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "contrast" : "")}
                to="/entries/new"
              >
                Create new
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "contrast" : "")}
                to="/bookmarks"
              >
                Bookmarks
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
