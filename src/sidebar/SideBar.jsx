import "./style.scss"

const SideBar = () => {
  return (
    <div className="sidebar_wrapper">
      <ul>
        <li className="active">Home</li>
        <li>Services</li>
        <li>News</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default SideBar