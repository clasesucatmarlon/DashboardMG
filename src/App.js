import '../src/assets/css/styles.css'
import { Sidebar } from './components/sidebar/Sidebar';
import Topbar from './components/topBar/Topbar'

function App() {
  return (
    <div>
      <Topbar />
      <Sidebar />
    </div>
  );
}

export default App;
