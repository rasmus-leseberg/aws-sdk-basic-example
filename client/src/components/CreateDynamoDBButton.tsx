import React from 'react';
import axios from 'axios';

const CreateDynamoDBButton: React.FC = () => {
  const handleCreateDynamoDBClick = async () => {
    try {
      // Update the URL to match your server's address and port
      const response = await axios.post('http://localhost:3001/create-dynamodb');
      console.log('DynamoDB creation response:', response.data);
      alert('DynamoDB table creation initiated successfully.');
    } catch (error) {
      console.error('Error creating DynamoDB table:', error);
      alert('Failed to initiate DynamoDB table creation.');
    }
  };

  return (
    <button onClick={handleCreateDynamoDBClick}>Create DynamoDB Table</button>
  );
};

export default CreateDynamoDBButton;
