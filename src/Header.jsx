import logo from "./assets/logo.svg";
import ringIcon from "./assets/ring.svg";
import moonIcon from "./assets/icons/moon.svg";
import cartIcon from "./assets/shopping-cart.svg";

const Header = () => {
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="/">
          <img src={logo} width="139" height="26" alt="Cine Rental" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/10 rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ringIcon} width="24" height="24" alt="Notifications" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/10 rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={moonIcon}
                width="24"
                height="24"
                alt="Toggle dark mode"
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/10 rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={cartIcon} width="24" height="24" alt="Shopping cart" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
