import multer from 'multer';
import fs from 'fs-extra';

const uploadDir = 'uploads/';
fs.ensureDirSync(uploadDir);

const upload = multer({ dest: uploadDir });

export default upload;