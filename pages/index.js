import { useState } from "react";

const Modal = ({ children, isModalOpen, onClose }) => {
  return isModalOpen ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        onClose();
      }}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  ) : null;
};

const App = () => {
  const [modalShown, toggleModal] = useState(false);

  const handleToggleClick = () => {
    toggleModal(!modalShown);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={handleToggleClick}>Button</button>
      <Modal
        isModalOpen={modalShown}
        onClose={() => {
          toggleModal(false);
        }}
      >
        Content
      </Modal>
    </div>
  );
};

export default App;
