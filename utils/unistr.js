/*
* 用来产生唯一的随机字符串的工具函数
* 依据：当前时间的毫秒值&[a,b,c,d,e,f,....,x,y,z]打乱顺序后随机取
* 1593667570743
* */

const words = 'abcdefghijklmnopqrstuvwxyz'.split('').sort(() => Math.random() - 0.5)

const uni_str = () => {
  return Date.now() + words.join('').substr(0, 7)
}

module.exports = uni_str
