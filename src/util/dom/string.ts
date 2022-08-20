/**
 * 获取字符串的可视长度
 * @param str
 */
export const viewLength = (str: string): number => {
  if (!str) return 0
  const len = str.split('').reduce((prev, curr) => {
    // 英文字母和数字等算一个字符
    if (/[a-z]|[0-9]|[,;.!@#-+/\\$%^*()<>?:"'{}~]/i.test(curr)) {
      return prev + 0.35
    }
    // 其他的算是2个字符
    return prev + 0.7
  }, 0)

  // 向上取整，防止出现半个字的情况
  return len
}
