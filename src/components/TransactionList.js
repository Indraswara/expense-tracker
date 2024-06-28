import React from 'react'

export const TransactionList = () => {
  return (
    <>
        <h3>History</h3>
        <ul className="list">
            <li className="minus">
                Cash <span>-Rp100.000</span><button className="delete-btn">x</button>
            </li>
        </ul>
    </>
  )
}
