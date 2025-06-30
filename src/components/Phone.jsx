export default function Phone({
  imgSrc,
  altText = "App Screenshot",
  color = "black",
  deviceStyles = {},
  wrapperStyles = {},
}) {
  return (
    <div className="device-wrapper " style={wrapperStyles}>
      <div
        className={`device device-iphone-14 responsive-device device-${color}`}
        style={deviceStyles}
      >
        <div className="device-frame">
          <div className="device-content">
            <img src={imgSrc} alt={altText} loading="lazy"></img>
          </div>
          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
        </div>
      </div>
    </div>
  );
}
