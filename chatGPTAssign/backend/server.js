import express from 'express';
import multer from 'multer'; 

const app = express();
const upload = multer({ dest: 'uploads/' }); 

app.post('/api/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  console.log('File received:', file);
  res.json({ message: "File uploaded successfully!" });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
