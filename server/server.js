const express = require('express');
const cors = require('cors');
const { DynamoDBClient, CreateTableCommand, DeleteTableCommand } = require('@aws-sdk/client-dynamodb');

const app = express();
const port = 3001;
const dynamoDBClient = new DynamoDBClient({ region: 'us-east-1' });

app.use(cors());
app.use(express.json());

// Create DynamoDB table
app.post('/create-dynamodb', async (req, res) => {
  const params = {
    TableName: 'example-table', // Specify your table name here
    AttributeDefinitions: [
      { AttributeName: 'id', AttributeType: 'S' }
      // Add other attribute definitions here
    ],
    KeySchema: [
      { AttributeName: 'id', KeyType: 'HASH' }
      // Add other key schema elements here
    ],
    BillingMode: 'PAY_PER_REQUEST', // Or 'PROVISIONED' for provisioned mode
  };

  try {
    const command = new CreateTableCommand(params);
    const response = await dynamoDBClient.send(command);
    console.log(response);
    res.send('DynamoDB table created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to create DynamoDB table');
  }
});

// Delete DynamoDB table
app.post('/delete-dynamodb', async (req, res) => {
  const params = {
    TableName: 'example-table', // Specify your table name here
  };

  try {
    const command = new DeleteTableCommand(params);
    const response = await dynamoDBClient.send(command);
    console.log(response);
    res.send('DynamoDB table deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to delete DynamoDB table');
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
