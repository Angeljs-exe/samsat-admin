import './textButton.scss'

const textButton = () => {
    return (
      <div className="textButton">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    )
  }
  
  export default textButton