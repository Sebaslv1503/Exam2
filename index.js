const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Coneected to MongoDB'))
.catch(err => console.error('❌ Conexion Error:', err));

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Routes
const articleRoutes = require('./routes/articleRoutes');
app.use('/api/articles', articleRoutes);

const compactDiscRoutes = require('./routes/compactDiscRoutes');
app.use('/api/compact-discs', compactDiscRoutes);

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
