// 変数numにランダムな1以上の正の数を代入する
let num = 30

// 変数numの値が3と5の倍数であれば、「3と5の倍数です」という文字列を出力する
if (num % 3 == 0 && num % 5 == 0) {
  console.log('3と5の倍数です')
}
// 変数numの値が3の倍数であれば、「3の倍数です」という文字列を出力する
else if (num % 3 == 0) {
  console.log('3の倍数です')
}
// 変数numの値が5の倍数であれば、「5の倍数です」という文字列を出力する
else if (num % 5 == 0) {
  console.log('5の倍数です')
}
// 上記のいずれでもない場合、変数numの値が出力されている
else {
  console.log(num);
}