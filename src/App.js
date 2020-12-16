import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
// import scifi from "./scifi.json";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import {Row,Col,Container} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <WarningSign warningText="Book List" className="cardSelected" />
      <MyBadge color="warning" text="wow!" />
    
 
      
        <BookList  />
        

     
      


    </div>
  );
}

export default App;
