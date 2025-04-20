// Function ทำงานกับ database ผ่าน prisma
// ทำงานกับตาราง ได้แก่ create, read, update, delete
const multer = require('multer'); // ใช้งานการอัพโหลดไฟล์
const path = require('path'); // ใช้งานการจัดการ path ที่อยู่ของไฟล์

// ใช้ prisma ทำงานกับ database
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient(); // สร้างตัวแปร prisma


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
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimeType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));
        if (mimeType && extname) {
            return cb(null, true);
        }
        cb('Give proper files format to upload');
    }
}).single('userImage');
//-----------------------------------------------------------------



// Function เพิ่มข้อมูล user-----------------------------------------------
exports.createUser = async (req, res) => {
    try {
        // คำสั่งการทำงานกับ database ผ่าน prisma
        // ทำงานหน้าขวาเสร็จ แล้วเก็บผลทางซ้าย (result)
        const result = await prisma.user_tb.create({
            data: {
                userFullname: req.body.userFullname,
                userEmail: req.body.userEmail,
                userPassword: req.body.userPassword,
                userImage: req.file ? req.file.path.replace("images\\user\\", "") : "",
            }
        })
        // เมื่อทำงานสําเร็จ ส่งผลไป client
        // create = 201, update = 200
        res.status(201).json({
            message: 'Insert OK Bro!',
            data: result
        })


    } catch (error) {
        res.status(500).json({ message: `พบปํญหาในการทำงาน ${error.message}` });
    }
}

//-----------------------------------------------------------------

// Function Login เพื่อตรวจสอบชื่อผู้ใช้และรหัสผ่าน------------------------
exports.checkLogin = async (req, res) => {
    try {
        // คำสั่งการทำงานกับ database ผ่าน prisma
        const result = await prisma.user_tb.findFirst({
            where: {
                userEmail: req.params.userEmail,
                userPassword: req.params.userPassword
            }
        })
        // เมื่อทำงานสําเร็จ ส่งผลไป client
        // create = 201, update = 200
        if (result) {
            res.status(200).json({
                message: 'Get OK Bro!',
                data: result
            })
            //ต้องมี 404 เพราะตรวจสอบ
        } else {
            res.status(404).json({
                message: 'Get Not Found Bro!',
                data: result
            })
        }
    } catch (error) {
        res.status(500).json({ message: `พบปํญหาในการทำงาน ${error.message}` });
    }
}
//-----------------------------------------------------------------

// Function แก้ไข user
exports.editUser = async (req, res) => {
    try {
        let result = {}
        // ตรวจสอบว่ามีการอัพโหลดไฟล์ไหม
        if (req.file) {
            //แก้ไขรูป
            result = await prisma.user_tb.update({
                data: {
                    userFullname: req.body.userFullname,
                    userEmail: req.body.userEmail,
                    userPassword: req.body.userPassword,
                    userImage: req.file ? req.file.path.replace("images\\user\\", "") : "",
                },
                where: {
                    userId: parseInt(req.params.userId)
                }
            })
        } else {
            //ไม่แก้ไขรูปภาพ
            result = await prisma.user_tb.update({
                data: {
                    userFullname: req.body.userFullname,
                    userEmail: req.body.userEmail,
                    userPassword: req.body.userPassword,
                }, //เงื่อนไขในการแก้ไข
                where: {
                    userId: parseInt(req.params.userId)
                }
            })
        }

        //done
        res.status(200).json({
            message: 'Update OK Bro!',
            data: result
        })

    } catch (error) {
        res.status(500).json({ message: `พบปํญหาในการทำงาน ${error.message}` });
    }
}
//-----------------------------------------------------------------