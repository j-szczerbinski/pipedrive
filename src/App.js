import styles from './App.module.scss';
import Header from './Components/Header/Header';
import UnsereService from './Components/UnsereService/UnsereService';
import MehrAbs from './Components/MehrAbs/MehrAbs';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <UnsereService />
      <MehrAbs />
    </div>
  );
}

export default App;
