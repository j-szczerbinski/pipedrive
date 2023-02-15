import styles from './App.module.scss';
import Header from './Components/Header/Header';
import UnsereService from './Components/UnsereService/UnsereService';
import MehrAbs from './Components/MehrAbs/MehrAbs';
import MehrKund from './Components/MehrKund/MehrKund';
import Ablauf from './Components/Ablauf/Ablauf';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <UnsereService />
      <MehrAbs />
      <MehrKund />
      <Ablauf />
    </div>
  );
}

export default App;
