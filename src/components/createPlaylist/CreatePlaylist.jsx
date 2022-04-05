import React from 'react'
import Button from '../button/Button'
import './styles.css'

function CreatePlaylist() {
  return (
    <>
      <form>
        <div>
          <p className="form_title">Title
            <span className="form_required">*</span>
          </p>
          <input type="text" id="search" className="form_input" required />
        </div>

        <div>
          <p className="form_desc">Description</p>
          <textarea name="desc" id="desc" className="form_desc"></textarea>
        </div>
        <Button text="Create Playlist" />
      </form>
    </>
  )
}

export default CreatePlaylist;