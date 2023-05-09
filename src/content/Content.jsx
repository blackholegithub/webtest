import "./style.scss"

import cssImg from '../assets/fileIMG.svg'
import htmlImg from '../assets/imgHTML.svg'
import urlImg from '../assets/imgurrl.svg'

const Content = () => {
  return (
    <div className="content_wrapper">
      <div className="content__header">
        <h3>Lorem ipsum dolor sit amet ?</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus fuga nostrum repellendus ullam perspiciatis numquam vel incidunt unde illum optio aspernatur ducimus laudantium neque minus odit veniam, cumque distinctio.
          Quasi animi magnam ex eligendi eveniet exercitationem ipsa magni! Quibusdam illo explicabo, similique vitae quia saepe, sunt vero quos velit cupiditate veritatis nulla soluta esse at aut doloremque odio fuga!</p>
      </div>
      <div className="content__container">
        <div className="content_item">
          <h2>Lorem ipsum dolor sit amet</h2>
          <div className="title">
            <img src={cssImg} alt="" className="img" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, provident. Consequuntur beatae velit nostrum harum temporibus ipsum debitis quam veniam, rem laboriosam id fugiat animi, optio, deserunt odio non. Magnam?</p>
          </div>
        </div>
        <div className="content_item">
        <h2>Lorem ipsum dolor sit amet</h2>
        <div className="title">
            <img src={htmlImg} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, provident. Consequuntur beatae velit nostrum harum temporibus ipsum debitis quam veniam, rem laboriosam id fugiat animi, optio, deserunt odio non. Magnam?</p>
          </div>
        </div>
        <div className="content_item">
        <h2>Lorem ipsum dolor sit amet</h2>
        <div className="title">
            <img src={urlImg} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, provident. Consequuntur beatae velit nostrum harum temporibus ipsum debitis quam veniam, rem laboriosam id fugiat animi, optio, deserunt odio non. Magnam?</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Content