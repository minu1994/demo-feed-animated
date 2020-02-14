import React, { Fragment, useState, useEffect } from "react"
import getFakePosts from "../../fakeData/getFakePosts"
import AnimatedCard from "../AnimatedCard"
import {
  getPostsFromStorage,
  setPostsToStorage,
  someUserInsertNewPost,
  useToast,
} from "./feed-utils"
import style from "./Feed.module.css"

export default () => {
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    let postsFromStorage = getPostsFromStorage()
    if (postsFromStorage == null) {
      postsFromStorage = getFakePosts()
    }
    setPostsToStorage(postsFromStorage)
    setPosts(postsFromStorage)
  }, [])

  const [showToastOneTime] = useToast()

  setInterval(() => {
    const postsFromStorage = getPostsFromStorage()
    if (posts && posts.length !== postsFromStorage.length) {
      // show toast one time only
      showToastOneTime(
        "Sono disponibili nuovi aggiornamenti. clicca qui per vederli",
        () => {
          window.location.reload()
        }
      )
    }
  }, 2 * 1000)

  // some user insert a post after 5 secs (called at every render)
  someUserInsertNewPost(posts, null)

  return (
    <div>
      <button
        className={style.clearCacheButton}
        onClick={() => {
          localStorage.removeItem("posts")
          window.location.reload()
        }}
      >
        clear posts from Local Storage
      </button>

      {posts && (
        <Fragment>
          <h2> {posts.length} posts </h2>
          {posts.map(post => (
            <AnimatedCard
              key={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
            />
          ))}
        </Fragment>
      )}
    </div>
  )
}
