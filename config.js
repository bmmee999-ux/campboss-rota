// ใส่ 2 ค่าจาก Supabase แล้วบันทึกไฟล์ (ไม่ต้องแก้ไฟล์อื่น)
//  URL = Project URL  เช่น https://abcdefghijklmnopqrst.supabase.co  (คัดลอกจาก Project Settings > Data API)
//  KEY = anon public key (ยาวมาก ขึ้นต้น eyJ...) คัดลอกจาก Project Settings > API Keys > Legacy
// วางทับข้อความ PASTE... ให้อยู่ในเครื่องหมาย ' ' เหมือนเดิม ห้ามมีช่องว่างหรือขึ้นบรรทัดใหม่กลางข้อความ
window.CONFIG = {
  URL: 'https://fzorcgslsaqyspwzjfyh.supabase.co',
  KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6b3JjZ3Nsc2FxeXNwd3pqZnloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzMDI3MDQsImV4cCI6MjEwODg3ODcwNH0.nV3KAfiNVcSXd45AulEUgXZp77ffUp1rEMmMX6qy-Rc',
  PIN: ''   // (ไม่บังคับ) ตั้งรหัสสั้นๆ เช่น '1234' ถ้าต้องการให้คนที่รู้รหัสเท่านั้นกด "บันทึก" ได้ ปล่อยว่างถ้าไม่ใช้
}
