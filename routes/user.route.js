//endpoint คือ วิธีเรียกใช้ API
//คำสั่งที่ใช้ในการกำหนดเส้นทางในการเรียกใช้ API เป็นการกำหนด Endpoint ของ API
//บอก user ว่าจะเรียกใช้ API ยังไง
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

//เพิ่ม
router.post('/', userController.upload, userController.createUser);

// ค้นหา ตรวจสอบ ดึง ดู
router.get('/:userEmail/:userPassword', userController.checkLogin);

// แก้ไข
router.put('/:userId', userController.upload, userController.editUser);


//*******\ */
module.exports = router
