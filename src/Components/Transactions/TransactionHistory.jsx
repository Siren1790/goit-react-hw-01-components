import css from "Components/Transactions/Transactions.module.css";

const TransactionHistory = ({ transactions }) => {
    return (
        <table className={css["transaction-history"]}>
            <caption>Transaction history</caption>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
            {transactions.map(({id, type, amount, currency}) => {
                return (
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default TransactionHistory;