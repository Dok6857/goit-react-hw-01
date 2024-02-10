import { TransactionItem } from "./TransactionItem";

export const TransactionHistory = ({transactions}) => {
    return (
    <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map((transaction) => (
        <tr key={transaction.id}>
            <TransactionItem  transaction={transaction}/>
      </tr>
    ))}
  </tbody>
</table>
);
}