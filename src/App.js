import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { NewTransaction } from './components/NewTransaction';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        < Balance />
        < IncomeExpenses />
        < TransactionList />
        < NewTransaction />
      </div>
    </div>
  );
}

export default App;
