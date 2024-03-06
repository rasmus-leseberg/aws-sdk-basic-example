import React from 'react';
import axios from 'axios';

const DeleteDynamoDBButton: React.FC = () => {
  const handleDeleteDynamoDBClick = async () => {
    try {
      const response = await axios.post('http://localhost:3001/delete-dynamodb');
      console.log('DynamoDB deletion response:', response.data);
      alert('DynamoDB table deletion initiated successfully.');
    } catch (error) {
      console.error('Error deleting DynamoDB table:', error);
      alert('Failed to initiate DynamoDB table deletion.');
    }
  };

  return (
    <button onClick={handleDeleteDynamoDBClick}>Delete DynamoDB Table</button>
  );
};

export default DeleteDynamoDBButton;
