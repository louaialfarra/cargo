import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="logo">
          <a href="#">
            Logo <span style={{ color: "red", fontWeight: "800" }}>Here</span>
          </a>
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
              <a href="#idmail">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
