import styles from './App.module.scss';
import Header from './Components/Header/Header';
import UnsereService from './Components/UnsereService/UnsereService';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <UnsereService />
    </div>
  );
}

export default App;
