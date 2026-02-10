import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Dashboard", icon: "🏠" },
  { to: "/courses", label: "Courses", icon: "📚" },
  { to: "/students", label: "Students", icon: "🎓" },
  { to: "/instructors", label: "Instructors", icon: "🧑‍🏫" },
  { to: "/settings", label: "Settings", icon: "⚙️" }
];

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar__brand">
      <span className="sidebar__logo">A</span>
      <div>
        <p className="sidebar__title">Aidea LMS</p>
        <p className="sidebar__subtitle">Admin Console</p>
      </div>
    </div>
    <nav className="sidebar__nav">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `sidebar__link${isActive ? " sidebar__link--active" : ""}`
          }
          end={item.to === "/"}
        >
          <span className="sidebar__icon">{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </nav>
    <div className="sidebar__promo">
      <p>Need help?</p>
      <button type="button" className="button button--ghost">
        Contact Support
      </button>
    </div>
  </aside>
);

export default Sidebar;
