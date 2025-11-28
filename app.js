const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

AWS.config.region = 'ap-south-1';
const sns = new AWS.SNS();

app.post('/send-email', async (req, res) => {
  try {
    const { email, subject, message } = req.body;

    await sns.publish({
      TopicArn: 'arn:aws:sns:ap-south-1:1234567890:My-S3-Alerts',
      Message: message,
      Subject: subject || 'Default Subject',
    }).promise();

    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Error sending email.' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
