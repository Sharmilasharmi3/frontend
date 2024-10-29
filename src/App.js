import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import UserModal from './components/UserModal';
import SearchBar from './components/SearchBar';
import SortOptions from './components/SortOptions';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  const filteredUsers = users
    .filter(
      user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'name') return a.name.localeCompare(b.name);
      if (sortOption === 'username') return a.username.localeCompare(b.username);
      return 0;
    });

  return (
    <div className="p-6">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SortOptions sortOption={sortOption} setSortOption={setSortOption} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

          <UserCard  />
      </div>

    </div>
  );
};

export default App;
