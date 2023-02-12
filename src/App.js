import "./App.css";
import data from "./Components/jsonfiles/data.json";
import friends from "./Components/jsonfiles/friends.json";
import transactions from "./Components/jsonfiles/transactions.json";
import user from "./Components/jsonfiles/user.json";

import UserProfile from "Components/UserProfile/UserProfile";
import Statistics from "Components/Statistics/Statistics";
import FriendList from "Components/FriendList/FriendList"
import TransactionHistory from "Components/Transactions/TransactionHistory"

function App() {
  return (
    <div>
        <UserProfile
          user={user}>          
        </UserProfile>


        <Statistics 
          stats={data} 
          title = "Upload stats"
        />

        <Statistics 
          stats={data} 
        />

        <FriendList
          friends={friends}
        />

        <TransactionHistory
          transactions={transactions}
        />;
      </div>

  );
}

export default App;
