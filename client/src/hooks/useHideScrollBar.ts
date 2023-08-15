function useHideScrollBar(isOpen: boolean) {
  window.document.body.style.overflowY = isOpen ? "hidden" : "auto";
}

export default useHideScrollBar;
