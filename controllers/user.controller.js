// Function ทำงานกับ database ผ่าน prisma
// ทำงานกับตาราง ได้แก่ create, read, update, delete
const multer = require('multer'); // ใช้งานการอัพโหลดไฟล์
const path = require('path'); // ใช้งานการจัดการ path ที่อยู่ของไฟล์


// Function Upload and rename Files ------------------------------------------- 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/user');
    },
    filename: (req, file, cb) => {
        cb(null, 'user_' + Math.floor(Math.random() * Date.now()) + path.extname(file.originalname));
    }
})
// Fuction Upload Files
exports.upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 50 // สูงสุด 50 MB
    },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/; // filetypes
        const mimeType = fileTypes.test(file.mimetype); // filetypes test
        const extname = fileTypes.test(path.extname(file.originalname));
        if (mimeType && extname) {
            return cb(null, true);
        }
        cb('Give proper files format to upload'); // เตื่อนให้อัพโหลดรูปตามประเภทที่กำหนด
    }
})
//-----------------------------------------------------------------



// Function เพิ่มข้อมูล user-----------------------------------------------
exports.createUser = async (req, res) => {
    try {
        // คำสั่งการทำงานกับ database ผ่าน prisma

    } catch (error) {
        res.status(500).json({ message: `พบปํญหาในการทำงาน ${error.message}` });
    }
}

//-----------------------------------------------------------------

// Function Login เพื่อตรวจสอบชื่อผู้ใช้และรหัสผ่าน------------------------
exports.checkLogin = async (req, res) => {
    try {
        // คำสั่งการทำงานกับ database ผ่าน prisma

    } catch (error) {
        res.status(500).json({ message: `พบปํญหาในการทำงาน ${error.message}` });
    }
}
//-----------------------------------------------------------------

// Function แก้ไข user
exports.editUser = async (req, res) => {
    try {
        // คำสั่งการทำงานกับ database ผ่าน prisma

    } catch (error) {
        res.status(500).json({ message: `พบปํญหาในการทำงาน ${error.message}` });
    }
}
//-----------------------------------------------------------------