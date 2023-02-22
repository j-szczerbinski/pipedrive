import styles from './App.module.scss';
import Header from './Components/Header/Header';
import UnsereService from './Components/UnsereService/UnsereService';
import MehrAbs from './Components/MehrAbs/MehrAbs';
import MehrKund from './Components/MehrKund/MehrKund';
import Ablauf from './Components/Ablauf/Ablauf';
import Buche from './Components/Buche/Buche';
import Referenzen from './Components/Referenzen/Referenzen';
import Uber from './Components/Uber/Uber';
import Form1 from './Components/Form1/Form1';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <UnsereService />
      <MehrAbs />
      <MehrKund />
      <Ablauf />
      {/* <Buche />
      <Referenzen />
      <Uber />
      <Form1 /> */}
    </div>
  );
}

export default App;
