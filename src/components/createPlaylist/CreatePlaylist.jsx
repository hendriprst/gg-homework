import React from 'react'
import Button from '../button/Button'
import './styles.css'

function CreatePlaylist() {
  return (
    <>
      <form>
        <div className="form_title">
          <p>Title
            <span className="form_required">*</span>
          </p>
          <label htmlFor="search"></label>
          <input type="text" id="search" className="form_input" inputProp={{maxLength: 10}} required />
        </div>

        <div className="form_desc">
          <p>Description</p>
          <textarea name="desc" id="desc" className="form_text"></textarea>
        </div>
        <Button text="Create Playlist" />
      </form>
    </>
  )
}

export default CreatePlaylist;