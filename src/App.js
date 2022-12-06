
import { useState } from 'react';
import './App.css';
import CreateForm from './components/CreateForm';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoLists from './components/TodoLists';

function App() {

   const [todos, setTodos] = useState([])

   return (
      <div className="App">
         <div className="main-container h-screen w-full flex flex-col items-center justify-start pt-28">
            <Header />
            <CreateForm 
               todos={todos}
               setTodos={setTodos}
            />
            <TodoLists
               todos={todos}
               setTodos={setTodos}
            />
            <Footer />
         </div>
      </div>
   );
}

export default App;
