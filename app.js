// write code here
บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร

const user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user); // *
user = {};
console.log(user); // **


บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร
  * ข้างบน isActive false 
  const user = {
  email: 'cc@gmail.com',
  isActive: false

** ข้างล่าง จะแสดง isActive true
const user = {
  email: 'cc@gmail.com',
  isActive: true
