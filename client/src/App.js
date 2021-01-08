import './App.css';
import ResourceList from './components/ResourceList'
import React,{useState} from 'react'

function App() {
  const [resourceName,setResourceName] = useState('posts');

  return (
    <div className="App">
      <button onClick={()=> setResourceName('post')}>Posts</button>
      <button onClick={()=> setResourceName('todos')}>todos</button>
      <ResourceList resourceName={resourceName} />
    </div>
  );
}

export default App;
