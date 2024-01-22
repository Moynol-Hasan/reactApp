const todoTitle = "Todo App";

const dummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

function Card() {
  return <div className="card">
    <h3 className="cardTitle">{todoTitle}</h3>
    <p className="cardDesc">{dummyText}</p>
    <p className="cardFooter"> {day + "/" + (month + 1) + "/" + year} </p>
  </div>
}

export default Card;