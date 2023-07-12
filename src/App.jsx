import Quiz from "./components/Quiz/Quiz";
import { useEffect, useState } from "react";
import { jsQuizz } from "./constants";


function App() {
  const [questions,setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      const response = await fetch("https://64acf9b3b470006a5ec51b70.mockapi.io/api/questions/questions");
      const questionsResponse = await response.json();
      setQuestions(questionsResponse);
    } catch (error) {
      console.log(error);
    }
  }

   return questions.length > 0 &&  <Quiz questions ={questions}/> 
}

export default App;
 