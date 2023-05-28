import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Restaurant.css";
import { faUser, faUtensils } from "@fortawesome/free-solid-svg-icons";

function Restaurant({ resName, resImage, resUser }) {
  return (
    <div className="res">
      <div className="res-header">
        <FontAwesomeIcon icon={faUtensils} />
        <h2>{resName}</h2>
      </div>
      <div className="res-image">
        <img
          crossOrigin="anonymus"
          src={`http://localhost:8080/${resImage}`}
          alt="img"
        />
      </div>
      <div className="res-info">
        <button className="info-btn">
          <FontAwesomeIcon icon={faUser} />
          <h4>{resUser}</h4>
        </button>
        <button className="detail-btn">Detail</button>
      </div>
    </div>
  );
}

export default Restaurant;
