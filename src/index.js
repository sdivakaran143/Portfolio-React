import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import LoadingWindow from './components/LoadingWindow';
const root = ReactDOM.createRoot(document.getElementById('root'));

const MainWindow=()=>{
  const[isloading,setloading]=useState(true);
  setInterval(()=>{
    setloading(false)
  },5000)
  return (isloading)?<LoadingWindow/>:<App/>
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainWindow/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
