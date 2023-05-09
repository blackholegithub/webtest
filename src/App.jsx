import "./App.scss"
import Content from "./content/Content"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import SideBar from "./sidebar/SIdeBar"

function App() {


  return (
    <div className="wrapper">
      <div className="Sidebar">
        <SideBar />
      </div>
      <div className="container">
        <div className="content">
          <Header />
          <Content />
          </div>
          <Footer />
      </div>
    </div>
  )
}

export default App
