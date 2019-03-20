import { useState } from 'react'

export default function useCommentTogle() {
  const [isShowComments, setIsShowComments] = useState()
  const toggleOpenItem = () => () => setIsShowComments(!isShowComments)

  return { isShowComments, toggleOpenItem }
}
