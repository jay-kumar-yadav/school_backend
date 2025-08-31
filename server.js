const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const schoolRoutes = require('./routes/schoolRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

app.use('/api/schools', schoolRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});