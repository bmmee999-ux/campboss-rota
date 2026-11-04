// ใส่ 2 ค่าจาก Supabase แล้วบันทึกไฟล์ (ไม่ต้องแก้ไฟล์อื่น)
//  URL = Project URL  เช่น https://abcdefghijklmnopqrst.supabase.co  (คัดลอกจาก Project Settings > Data API)
//  KEY = anon public key (ยาวมาก ขึ้นต้น eyJ...) คัดลอกจาก Project Settings > API Keys > Legacy
// วางทับข้อความ PASTE... ให้อยู่ในเครื่องหมาย ' ' เหมือนเดิม ห้ามมีช่องว่างหรือขึ้นบรรทัดใหม่กลางข้อความ
window.CONFIG = {
  URL: 'https://fzorcgslsaqyspwzjfyh.supabase.co',
  KEY: 'PASTE_ANON_PUBLIC_KEY_HERE',
  PIN: ''   // (ไม่บังคับ) ตั้งรหัสสั้นๆ เช่น '1234' ถ้าต้องการให้คนที่รู้รหัสเท่านั้นกด "บันทึก" ได้ ปล่อยว่างถ้าไม่ใช้
}
