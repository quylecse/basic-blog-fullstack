import { Fragment } from 'react'
import { Post } from './Post'
import PropTypes from 'prop-types'

export const PostList = ({ posts = [] }) => {
  return (
    <div>
      {posts.map((post) => (
        <Fragment key={post._id}>
          <Post {...post} />
          <hr />
        </Fragment>
      ))}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)).isRequired,
}
