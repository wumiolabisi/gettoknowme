import ReactDOM from "react-dom";

const Modal = ({ onClose, children }) => {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <div className="fixed top-0 bg-slate-400 bg-transparent-blur w-screen h-screen z-20">
            <div className="flex flex-row items-center justify-center h-screen">
                <div className="relative h-full md:w-3/4 rounded-lg bg-white md:p-16 p-10 overflow-scroll bg-violet-100">
                    <header className="text-right text-3xl">
                        <a href="#" title="Fermer la fenêtre" className="hover:text-violet-700" onClick={handleCloseClick}>x</a>
                    </header>
                    <section className="modal-body">{children}</section>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modals")
    );
};

export default Modal