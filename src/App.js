import styles from './App.module.scss';
import Header from './Components/Header/Header';
import UnsereService from './Components/UnsereService/UnsereService';
import MehrAbs from './Components/MehrAbs/MehrAbs';
import MehrKund from './Components/MehrKund/MehrKund';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <UnsereService />
      <MehrAbs />
      <MehrKund />
    </div>
  );
}

export default App;
