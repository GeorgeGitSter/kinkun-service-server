//คำสั่งที่ใช้ในการกำหนดเส้นทางในการเรียกใช้ API เป็นการกำหนด Endpoint ของ API
//บอก user ว่าจะเรียกใช้ API ยังไง
const express = require('express');
const router = express.Router();
const kinkunController = require('../controllers/kinkun.controller');

//เพิ่ม
router.post('/', kinkunController.upload, kinkunController.createKinkun);

// แก้ไข
router.put('/:kinkunId', kinkunController.upload, kinkunController.editKinkun);

// ลบ
router.delete('/:kinkunId', kinkunController.deleteKinkun);

// ค้นหา ตรวจสอบ ดึง ดู
router.get(`/kinkunall/:userId`, kinkunController.showAllKinkun);
router.get(`/kinkunonly/:kinkunId`, kinkunController.showOnlyKinkun);

//*******
module.exports = router