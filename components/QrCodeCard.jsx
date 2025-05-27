import React from 'react'

const QrCodeCard = ({imgSrc, titleText, bottomText}) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 shadow-lg max-w-80 max-h-120 rounded-lg">
            {/* && significa se existe, ex: se existe imgSrc ele renderiza a div <img>, caso o contrario não mostra nada, 
            os atributos são passados ao renderizar o componente, nesse caso, são passados no CardContainer*/}
            {imgSrc &&
            <img className="p-1 rounded-lg" src={imgSrc} alt="Card Image"></img>
            }
            {titleText &&
            <h3 className="dark:text-white text-slate-900 text-xl font-bold p-1 text-center"> 
                {titleText}
            </h3>
            }
            {bottomText &&
            <div className="dark:text-slate-300 text-slate-500 p-1 text-center">
                {bottomText}
            </div>
            }


        </div>
    )
}

export default QrCodeCard
