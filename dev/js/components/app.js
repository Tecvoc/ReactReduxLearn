import React from 'react';
import UserList from '../containers/userlist';
import UserDetail from '../containers/user-detail'
const App = () => (
  <div>
    <h2> Username </h2>
    <hr/>
    <UserList />
    <hr/>
    <h2>User Details</h2>
    <UserDetail />
  </div>
);

export default App;
