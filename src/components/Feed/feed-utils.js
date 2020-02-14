import { toast } from "react-toastify"
import getNewFakePost from "../../fakeData/getNewFakePost"

export function getPostsFromStorage() {
  return JSON.parse(localStorage.getItem("posts"))
}

export function setPostsToStorage(newPosts) {
  return localStorage.setItem("posts", JSON.stringify(newPosts))
}

export function showToast(toastContent, onClick) {
  const options = {
    onClick: onClick,
    autoClose: false,
    position: "bottom-right",
    draggable: false,
  }
  toast(toastContent, options)
}

export function useToast() {
  let toastVisible = false
  const showToastOneTime = (toastContent, onClick) => {
    if (!toastVisible) {
      toastVisible = true
      showToast(toastContent, onClick)
    }
  }
  return [showToastOneTime]
}

export function someUserInsertNewPost(arrayOfPosts, postsInitialState) {
  if (arrayOfPosts === postsInitialState) {
    setTimeout(() => {
      const postsFromStorage = getPostsFromStorage()
      console.log("post from storage: ", postsFromStorage)
      postsFromStorage.push(getNewFakePost())
      setPostsToStorage(postsFromStorage)
    }, 5 * 1000)
  }
}
