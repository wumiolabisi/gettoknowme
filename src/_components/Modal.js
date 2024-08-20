import ReactDOM from "react-dom";

const Modal = ({ onClose, children }) => {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <>
            <div className="fixed top-0 bg-slate-400 bg-transparent-blur w-screen h-screen z-20" onClick={handleCloseClick}>

            </div>
            <div className="flex flex-row items-center justify-center h-screen">
                <div className="fixed top-0 z-30 h-full md:w-2/4 rounded-lg md:px-10 md:py-0 p-4 overflow-scroll bg-zinc-800">
                    <header className="text-right md:text-xl text-3xl my-4">
                        <a href="#" title="Fermer la fenêtre" className="hover:text-green-300" onClick={handleCloseClick}>x</a>
                    </header>
                    <section className="modal-body">{children}</section>
                </div>
            </div>
        </>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modals")
    );
};

export default Modal