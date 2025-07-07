const CompactDisc = require('../models/CompactDisc');

exports.deleteCompactDisc = async (req, res) => {
  try {
    const { serialNumber } = req.params;
    const deletedDisc = await CompactDisc.findOneAndDelete({ serialNumber: serialNumber });
    if (!deletedDisc) {
      return res.status(404).json({ message: 'Compact Disc not found' });
    }
    res.json({ message: 'Compact Disc deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Compact Disc', error });
  }
};