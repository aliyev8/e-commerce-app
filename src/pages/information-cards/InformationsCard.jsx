import CarIcon from "../../assets/icons/CarIcon";
import QualityIcon from "../../assets/icons/QualityIcon";
import SupportIcon from "../../assets/icons/SupportIcon";
import SupportPhoneIcon from "../../assets/icons/SupportPhoneIcon";
import "./informationCard.scss";

function InformationsCard() {
  return (
    <div className="information_card custom-container">
      <span className="title">What Shopex Offer!</span>
      <div className="information_card__container">
        <div className="information_card__card item">
          <CarIcon />
          <span className="info">24/7 Support</span>
          <span className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </span>
        </div>

        <div className="information_card__card item">
          <SupportIcon />
          <span className="info">24/7 Support</span>
          <span className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </span>
        </div>

        <div className="information_card__card item">
          <QualityIcon />
          <span className="info">24/7 Support</span>
          <span className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </span>
        </div>

        <div className="information_card__card item">
          <SupportPhoneIcon />
          <span className="info">24/7 Support</span>
          <span className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </span>
        </div>
      </div>
    </div>
  );
}

export default InformationsCard;
