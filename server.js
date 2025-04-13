const express = require('express');
const cors = require('cors');
require('dotenv').config();

//create web server with express
const app = express();

// Port number for the server
const port = process.env.PORT;

// Middleware ใช้จัดการงานของ server
app.use(cors()); // ใช้ cors เพื่อเข้าถึง API ได้จากที่อื่น
app.use(express.json()); // ให้ web server รับข้อมูลเป็น json ได้ 

// บอก webserver ว่าจะใช้ URL ที่มี prefix อะไรบ้างในการเรียกใช้งาน API
app.use('/user', require('./routes/user'));
app.use('/kinkun', require('./routes/kinkun'));

// บอก webserver ในการใข้งานไฟล์ใน Image
app.use('/images/user', express.static('images/user'));
app.use('/images/kinkun', express.static('images/kinkun'));

// TEST การเข้าใช้งาน
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

// สร้างคำสั่งให้ web server รอรับ request (เปิดบริการแล้วนะ)
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});