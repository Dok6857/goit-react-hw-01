import { TransactionItem } from "./TransactionItem";
import styles from './TransactionHistory.module.css'

export const TransactionHistory = ({transactions}) => {
    return (
    <table className={styles.table}>
  <thead className={styles.tHeader}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map((transaction) => (
        <tr className={styles.tableRow} key={transaction.id}>
            <TransactionItem  transaction={transaction}/>
      </tr>
    ))}
  </tbody>
</table>
);
}