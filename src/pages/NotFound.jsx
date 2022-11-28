import React from 'react'
import "../styles/NotFound.scss"

const NotFound = () => {
  return (
    <div className='NotFound'>
        <div id="clouds">
            <div className="cloud x1"></div>
            <div className="cloud x1_5"></div>
            <div className="cloud x2"></div>
            <div className="cloud x3"></div>
            <div className="cloud x4"></div>
            <div className="cloud x5"></div>
        </div>
        <div className='c'>
            <div className='_404'>404</div>
            <div className='_1'>LA PAGINA</div>
            <div className='_2'>NO FUE ENCONTRADA</div>
            <a className='btn' href='/'>VOLVER A LA PAGINA PRINCIPAL</a>
        </div>
    </div>
  )
}

export default NotFound