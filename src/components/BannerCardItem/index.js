import './index.css'

const GetTheBanner = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  const btnText = 'Show More'
  return (
    <li className={`banner-card-item ${className}`}>
      <div>
        <h1 className="banner-name">{headerText}</h1>
        <p className="banner-description">{description}</p>
        <button className="more-btn" type="button">
          {btnText}
        </button>
      </div>
    </li>
  )
}
export default GetTheBanner
