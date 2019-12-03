// 考号算法
module.exports = ({nianji, banji, time, kaochang, zuowei}) => {
  return `${nianji}${banji}${time}${(kaochang < 10 ? '0' : '') + kaochang}${(zuowei < 10 ? '0' : '')+zuowei}`;
}
