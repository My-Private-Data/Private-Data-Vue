/**
 * 获取字符串的可视长度
 * @param str
 */
export const viewLength = (str: string): number => {
  let digitCount = 0
  let chineseCount = 0
  let singleCount = 0
  let doubleCount = 0
  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i)
    // 基本汉字
    if (c.match(/[\u4e00-\u9fa5]/)) {
      chineseCount++
    }
    // 基本汉字补充
    else if (c.match(/[\u9FA6-\u9fcb]/)) {
      chineseCount++
    }
    // 非双字节的字符：中文字、中文全角字符（如：？。、，等）
    // eslint-disable-next-line no-control-regex
    if (c.match(/[^\x00-\xff]/)) {
      doubleCount++
    } else {
      singleCount++
    }
    // 数字
    if (c.match(/[0-9]/)) {
      digitCount++
    }
  }
  // 字数（中英文）= chineseCount + digitCount
  // 全角字符 = doubleCount - chineseCount
  // 字母 = singleCount - digitCount
  // 字符 = chineseCount * 2 + 全角字符 * 2 + singleCount
  const alphaCount = singleCount - digitCount
  const doubleMarkCount = doubleCount - chineseCount
  const charCount = chineseCount * 2 + doubleMarkCount * 2 + singleCount
  const totalLength = chineseCount * 0.55 + doubleMarkCount * 0.75 + alphaCount * 0.35
  console.info(
    str,
    `[中文${chineseCount}个, 英文${alphaCount}个, 全角字符${doubleMarkCount}个, 字符${charCount}个]`,
    totalLength,
  )
  return totalLength
}
