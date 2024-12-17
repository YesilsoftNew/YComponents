const MyButton = ({ label, onClick }) => {
    return (
      <button className="my-button" onClick={onClick}>
        {label}
      </button>
    );
  };
  
  export default MyButton;