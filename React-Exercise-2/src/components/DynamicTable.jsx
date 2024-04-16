import React, { useState } from 'react';

function DynamicTable() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAdd = () => {
    if (firstName && lastName) {
      const newData = [...data, { firstName, lastName }];
      setData(newData);
      setFirstName('');
      setLastName('');
    }
  };

  const handleEdit = (index) => {
    setFirstName(data[index].firstName);
    setLastName(data[index].lastName);
    setEditIndex(index);
  };

  const handleUpdate = () => {
    if (firstName && lastName && editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = { firstName, lastName };
      setData(updatedData);
      setFirstName('');
      setLastName('');
      setEditIndex(null);
    }
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      {editIndex !== null ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DynamicTable;
