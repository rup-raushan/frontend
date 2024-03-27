import React from 'react'

const EditNotes = ({isActive}) => {

    const onUpload = () =>{
        
    }

    const onChange  = () =>{

    }
  return (
    <div className='edit-notes-whole-screen__wrapper flex'>
             <div class="dialoge__content">
                    <div class="dialoge__content__header">
                        <div class="header__text">
                            <p>Aeronotes</p>
                        </div>
                    </div>
                    <form className="upload-container__form flex flex-center flex-col flex-gap-20" onSubmit={onUpload} encType='multipart/form-data'>
                    <div className="upload-container-whole-input__wrapper">
                        <div className="input-container__wrapper">
                            <div className="input-container-label__wrapper">
                                <label htmlFor="title" className="upload-contaier__label p-normal">Title</label>
                            </div>
                            <input 
                            id='title'
                            name='title'
                            type="text"
                            onChange={onChange}
                            className="upload-contaier-input__text"  required
                            placeholder='Enter Title'/>
                        </div>
                        <div className="input-container__wrapper">
                            <div className="input-container-label__wrapper">
                                <label htmlFor="description" className="upload-contaier__label p-normal">Description</label>
                            </div>
                            <input 
                            id='description'
                            name='description'
                            type="text"
                            onChange={onChange}
                            className="upload-contaier-input__text"  required
                            placeholder='Enter Description'/>
                        </div>
                        <div className="input-container__wrapper">
                            <div className="input-container-label__wrapper">
                                <label htmlFor="subject" className="upload-contaier__label p-normal">Subject</label>
                            </div>
                            <select
                            id='subject' 
                            name='subject'
                            type="text"
                            onChange={onChange}
                            className="upload-contaier-input__text"  required
                            placeholder='Enter Title'>
                                <option value="other">Other</option>
                                <option value="Science">Science</option>
                                <option value="Social Science">Social Science</option>
                                <option value="Hindi">Hindi</option>
                                <option value="English">English</option>
                                <option value="Computer">Computer</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="General Knowledge">General Knowledge</option>
                            </select>
                        </div>
                        <div className="input-container__wrapper">
                            <div className="input-container-label__wrapper">
                                <label htmlFor="note" className="upload-contaier__label p-normal">File URL</label>
                            </div>
                            <input 
                            id='note'
                            name='note'
                            type="url"
                            onChange={onChange}
                            className="upload-contaier-input__text"  required
                            placeholder='Enter URL'/>
                        </div>
                        <div className="input-container__wrapper">
                            <div className="input-container-label__wrapper">
                                <label htmlFor="code" className="upload-contaier__label p-normal">Code</label>
                            </div>
                            <input 
                            id='code'
                            name='code'
                            type="password"
                            pattern='[0-9]*'
                            onChange={onChange}
                            className="upload-contaier-input__text"  required
                            placeholder='Enter Your Code'/>
                        </div>
                    </div>
                    <div className="upload-container-buttons__wrappper flex flex-gap-20">
                        <div className="upload-container-submit-btn-wrapper">
                            <button type="submit" className="primary-btn"><span>Upload</span></button>
                        </div>
                        <div className="upload-container-sec-btn-wrapper">
                            <button 
                            type="reset" 
                            className="secondary-btn"
                            onClick={()=>{isActive(false)}}><span>Cancel</span></button>
                        </div>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default EditNotes
