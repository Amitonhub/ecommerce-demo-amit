import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="bg-black text-white">
        <div className={`container d-flex align-items-center py-2 ${styles.headerContainer}`}>
          <div className="text-center">
            <div className={`d-flex align-items-center justify-content-center ${styles.summerShopContainer}`}>
              <div className="justify-content-center">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
              </div>
              <div className="btn btn-black text-white text-decoration-underline"><b>Shop Now</b></div>
            </div>
          </div>
          <div className="d-flex ms-auto"><div className={`text-nowrap me-2`}>English</div>
            <div>
              <FontAwesomeIcon className={`me-2`} icon={faAngleDown} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
