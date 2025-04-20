// Function ทำงานกับ database ผ่าน prisma
// ทำงานกับตาราง ได้แก่ create, read, update, delete
const multer = require('multer'); // ใช้งานการอัพโหลดไฟล์
const path = require('path'); // ใช้งานการจัดการ path ที่อยู่ของไฟล์
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient(); // สร้างตัวแปร prisma

// Function Upload and rename Files ------------------------------------------- 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/kinkun');
    },
    filename: (req, file, cb) => {
        cb(null, 'kinkun_' + Math.floor(Math.random() * Date.now()) + path.extname(file.originalname));
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
}).single('kinkunImage');
//-----------------------------------------------------------------

// Function เพิ่ม ข้อมูลการกิน-----------------------------------------------
exports.createKinkun = async (req, res) => {
    try {
        // คำสั่งการทำงานกับ database ผ่าน prisma
        const result = await prisma.kinkun_tb.create({
            data: {
                kinkunTitle: req.body.kinkunTitle,
                kinkunState: req.body.kinkunState,
                kinkunDate: req.body.kinkunDate,
                kinkunCost: parseFloat(req.body.kinkunCost),
                kinkunImage: req.file ? req.file.path.replace("images\\kinkun\\", "") : "",
                userId: parseInt(req.body.userId)
            }
        })
        // เมื่อทำงานสําเร็จ ส่งผลไป client
        // create = 201, ที่เหลือ 200
        res.status(201).json({
            message: 'Insert OK Bro!',
            data: result
        })

    } catch (error) {
        res.status(500).json({ message: `พบปํญหาในการทำงาน ${error.message}` });
    }
}

//-----------------------------------------------------------------

// Function แก้ไขข้อมูลการกิน-----------------------------------------------
exports.editKinkun = async (req, res) => {
    try {
        // คำสั่งการทำงานกับ database ผ่าน prisma
        let result = {}
        // ตรวจสอบว่ามีการอัพโหลดไฟล์ไหม
        if (req.file) {
            //แก้ไขรูป
            result = await prisma.kinkun_tb.update({
                data: {
                    kinkunTitle: req.body.kinkunTitle,
                    kinkunState: req.body.kinkunState,
                    kinkunDate: req.body.kinkunDate,
                    kinkunCost: parseFloat(req.body.kinkunCost),
                    kinkunImage: req.file ? req.file.path.replace("images\\kinkun\\", "") : "",
                    userId: parseInt(req.body.userId)
                },
                where: {
                    kinkunId: parseInt(req.params.kinkunId)
                }
            })
        } else {
            //ไม่แก้ไขรูปภาพ
            result = await prisma.kinkun_tb.update({
                data: {
                    kinkunTitle: req.body.kinkunTitle,
                    kinkunState: req.body.kinkunState,
                    kinkunDate: req.body.kinkunDate,
                    kinkunCost: parseFloat(req.body.kinkunCost),
                    userId: parseInt(req.body.userId)

                }, //เงื่อนไขในการแก้ไข
                where: {
                    kinkunId: parseInt(req.params.kinkunId)
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

// Function ลบข้อมูลการกิน-----------------------------------------------
exports.deleteKinkun = async (req, res) => {
    try {
        const result = await prisma.kinkun_tb.delete({
            where: {
                kinkunId: parseInt(req.params.kinkunId)
            }
        })

        //done
        res.status(200).json({
            message: 'Delete OK Bro!',
            data: result
        })

    } catch (error) {
        res.status(500).json({ message: `พบปํญหาในการทำงาน ${error.message}` });
    }
}
//-----------------------------------------------------------------

// Function ถึงข้อมูลการการกินทั้งหมดจากตาราง ของ user หนึ่ง ๆ--------------------------------
exports.showAllKinkun = async (req, res) => {
    try {
        // คำสั่งการทำงานกับ database ผ่าน prisma
        const result = await prisma.kinkun_tb.findMany({
            where: {
                userId: parseInt(req.params.userId)
            },
        })
        // เมื่อทำงานสําเร็จ ส่งผลไป client
        // create = 201, update = 200
        if (result.length > 0) {
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

// Function ถึงข้อมูลการการกินหนึ่ง ๆ จากตาราง --------------------------------
exports.showOnlyKinkun = async (req, res) => {
    try {
        // คำสั่งการทำงานกับ database ผ่าน prisma
        const result = await prisma.kinkun_tb.findFirst({
            where: {
                kinkunId: parseInt(req.params.kinkunId)
            },
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