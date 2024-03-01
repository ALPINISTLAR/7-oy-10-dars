export default () => {
  const showModal = () => {
    document.getElementById("dialog").showModal();
  };

  const closeModal = () => {
    document.getElementById("dialog").close();
  };

  return {
    showModal,
    closeModal,
  };
};
