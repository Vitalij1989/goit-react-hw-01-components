import PropTypes from 'prop-types';

import { TransactionItem } from '../TransactionItem/TransactionItem';

export const TransactionHistory = ({ transactions }) => {
  return (
    <>
      <table>Transaction History</table>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction, index) => {
            return (
              <tr key={transaction.id} index={index}>
                <TransactionItem transaction={transaction} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
