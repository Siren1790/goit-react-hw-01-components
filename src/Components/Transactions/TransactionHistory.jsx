import css from "Components/Transactions/Transactions.module.css";
import PropTypes from 'prop-types';

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

TransactionHistory.protoTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
}
export default TransactionHistory;