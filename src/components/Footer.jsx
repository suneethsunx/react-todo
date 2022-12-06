import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="footer-container mt-7 pb-7">
                <footer className='flex flex-col items-center'>
                    <p className='m-0 opacity-50'>Simple React CRUD app ( Todo )</p>
                    <a href="https://github.com/suneethsunx/react-todo">
                        <span class="iconify text-2xl duration-100 opacity-50 hover:opacity-100 rounded flex w-full" data-icon="mdi:github"></span>
                    </a>
                </footer>
            </div>
        </div>
    )
}

export default Footer