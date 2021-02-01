import Modal from "./Modal"
import Textie from "../assets/textie.png"
import React from "react"
let Header = () => {
    let [show, setShow] = React.useState(false)
    let showModal = () => {
        setShow(true);
    };
    let hideModal = () => {
        setShow(false);
    };
    return (
    <div className="container">
        <a href="#">
          <img className="image-fluid p-2 mt-1" style={{width:"35%", background:"#222"}} src={Textie} />
        </a>
        <button href="#" onClick={showModal} className="aboutBtn">
          Hakkında
        </button>
    <Modal show={show} handleClose={hideModal}>
        <div className="modaltitle">
          <h1 className="p-2 display-4">Hakkında</h1>
          <p className="p-4">Textie istediğiniz metni bir açıdan analiz etmeye yarayan araçtır. Metindeki kelime, cümle, noktalama işareti yanı sıra; cümle uzunluğu okunabilirlik oranı gibi birçok bilgiye sahip olursunuz. Uygulamayı yazan ile ilgili ayrıntılı bilgiyi <a href="https://www.enderyazici.site/" target="_blank">enderyazici.site</a> adresinden ulaşabilirsiniz.</p>
        </div>
    </Modal>
    </div>
    )
    
  }

export default Header