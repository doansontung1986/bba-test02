/*
Hãy đếm và in ra có bao nhiêu cặp số nguyên dương (a, b) từ 1 tới 100 sao cho tích của chúng chia hết cho 19.
*/

// Giải thích: Việc lặp với b = a giúp tránh việc đếm trùng lặp các cặp (a, b) và (b, a). Chúng ta chỉ cần kiểm tra các cặp với a <= b để đảm bảo rằng mỗi cặp được đếm một lần duy nhất.

let count = 0;

for (let a = 1; a <= 100; a++) {
  for (let b = a; b <= 100; b++) {
    if ((a * b) % 19 === 0) {
      console.log(`(${a}, ${b})`);
      count++;
    }
  }
}

console.log(`Tổng số cặp (a, b) thỏa mãn điều kiện: ${count}`);
