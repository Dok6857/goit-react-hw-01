export const TransactionItem = ({transaction : { type, amount, currency }}) => {
    return (
    <>
      <th>{type.charAt(0).toUpperCase() + type.slice(1)}</th>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
    )
}