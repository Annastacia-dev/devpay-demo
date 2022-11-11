import React from 'react'

function Header({handlePrint, handleSubmit}) {
    return (
        <>

            <header className="flex flex-col items-center justify-center mb-4  xl:flex-row xl:justify-between">
                <div>
                    <h2 className='font-bold uppercase tracking-wide text-4xl mb-3'> INVOICE</h2>
                </div>

                <div>
                    <ul className='flex items-center justify-between flex wrap '>
                        <li>
                            <button  onClick={handlePrint} className='invoice-btn btn btn-print'>
                            <i className="fa-solid fa-print"></i>
                                Print
                                </button>
                        </li>
                        <li>
                            <button className='invoice-btn btn btn-download'>
                            <i className="fa-solid fa-file-arrow-down"></i>
                                Download
                            </button>
                        </li>
                        <li><button onClick={handleSubmit} className='invoice-btn btn btn-send'>
                        <i className="fa-solid fa-paper-plane"></i>
                            Send

                        </button>
                        </li>
                    </ul>
                </div>
            </header>








        </>
    )
}

export default Header