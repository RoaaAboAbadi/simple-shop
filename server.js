const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000; // يمكنك تغيير البورت إذا كنت تفضل بورت آخر

// تحديد المجلد الذي يحتوي على ملفات المشروع
app.use(express.static(path.join(__dirname, 'public')));

// تشغيل السيرفر
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});