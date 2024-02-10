import './App.css';
import { FriendList } from './friendList/FriendList';
import { Profile } from './profile/Profile';
import userData from './profile/userData.json';
import friends from './friendList/friends.json';
import { TransactionHistory } from './transaction/TransactionHistory';
import transactions from './transaction/transactions.json'

export function App() {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </>
  )
}
