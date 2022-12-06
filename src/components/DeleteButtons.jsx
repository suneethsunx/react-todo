import React from 'react'

const DeleteButtons = () => {
    return (
        <div>
            <div className="delete-options flex gap-2">
                <button type='button' className='bg-blue-500 hover:bg-blue-600 duration-100 ease-in-out text-white font-medium p-2 px-3 rounded mt-3 flex items-center gap-1'>
                    <span class="iconify" data-icon="ic:round-delete"></span>
                    Delete Completed
                </button>
                <button type='button' className='bg-blue-400 hover:bg-blue-500 duration-100 ease-in-out text-white font-medium p-2 px-3 rounded mt-3 flex items-center gap-1'>
                    Delete All
                </button>
            </div>
        </div>
    )
}

export default DeleteButtons