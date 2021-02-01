const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button type="button" className="btn btn-dark" style={{float:"right"}} onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    );
  };
export default Modal