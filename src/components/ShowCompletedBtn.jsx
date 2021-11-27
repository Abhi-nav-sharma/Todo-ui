function ShowCompletedBtn({ show, onClick }) {
  if (show) {
    return <button onClick={onClick}>Hide Completed TO-DOs</button>;
  } else {
    return <button onClick={onClick}>Show Completed TO-DOs</button>;
  }
}
export default ShowCompletedBtn;
