import PropTypes from 'prop-types'

export const PostFilter = ({ field }) => {
  return (
    <>
      <div>
        <label htmlFor={`filter-${field}`}>{field}: </label>
        <input type='text' name={`filter-${field}`} id={`filter-${field}`} />
      </div>
    </>
  )
}
PostFilter.propTypes = {
  field: PropTypes.string.isRequired,
}
