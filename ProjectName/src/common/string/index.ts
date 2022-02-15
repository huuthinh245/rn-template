export const removeHtmlTag = (text: string = '') => {
    return text.replace(/<[^>]*>/g, ' ')
      .replace(/s{2,}/g, ' ')
      .replace(/\&nbsp;/g, '')
      .trim()
}