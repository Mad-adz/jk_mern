import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
const Modal = ({ isOpen, setIsOpen, onClose, children }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-2 md:p-8 fixed inset-0 z-50 grid place-items-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className=" text-white rounded-lg w-full max-w-md shadow-xl cursor-default relative overflow-hidden"
            >
              <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg">
                {children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
