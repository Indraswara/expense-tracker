import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format';
export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);


    const income = transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0)
        .toFixed(2)

    const expense = transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0)
        .toFixed(2)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">Rp{numberWithCommas(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">Rp{Math.abs(numberWithCommas(expense))}</p>
            </div>
        </div>
  )
}
