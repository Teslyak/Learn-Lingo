import propTypes from "prop-types";
import { createPortal } from "react-dom";
import { Backdrop, ContentWrap, Wrap } from "./WrapPopUp.styled";
import { useCallback, useEffect, useState } from "react";

const BaseModalWrap = ({ children, onClose }) => {
  const [closing, setClosing] = useState(false);

  document.body.style.overflow = "hidden";

  const CloseModal = useCallback(
    (e) => {
      if (e.code === "Escape" || e.target === e.currentTarget) {
        setClosing(true);
        setTimeout(() => {
          setClosing(false);
          document.body.style.overflow = "auto";
          onClose();
        }, 750);
      }
    },
    [onClose]
  );
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", CloseModal);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", CloseModal);
    };
  }, [CloseModal]);

  return createPortal(
    <Backdrop id="modalWrap" $closing={closing} onClick={CloseModal}>
      <Wrap>
        <ContentWrap $closing={closing}>{children}</ContentWrap>
      </Wrap>
    </Backdrop>,
    document.querySelector("#root")
  );
};

BaseModalWrap.propTypes = {
  onClose: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
};
export default BaseModalWrap;
