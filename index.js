const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://root:slvplanA2003@cluster0.qwwgu15.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conected to MongoDB'))
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
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});






