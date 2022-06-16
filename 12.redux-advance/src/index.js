import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
// react-redux不需要手动检测并更新
// store.subscribe(()=>{
//   root.render(<App/>)
// })

