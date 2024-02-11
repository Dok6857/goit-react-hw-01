import styles from './TransactionItem.module.css'

export const TransactionItem = ({transaction : { type, amount, currency }}) => {
    return (
    <>
      <th className={styles.tableType}>{type.charAt(0).toUpperCase() + type.slice(1)}</th>
      <td className={styles.tableData}>{amount}</td>
      <td className={styles.tableData}>{currency}</td>
    </>
    )
}