import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="logo">
          <a href="#">Logo Here</a>
        </div>
        <div className="menuList">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
