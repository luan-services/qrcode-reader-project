import React from 'react'
import QrCodeCard from './qrcodeCard'
import { cards } from '../objects/Card'
{/* importando a data dos arquivos card, quando tiver um database vai importar direto de lá */}

const CardContainer = () => {
    return (
        <div className="container w-full min-h-screen flex flex-wrap justify-center items-center mx-auto gap-6 py-10 px-4 sm:px-6 md:px-8 lg:px-10">
            {/* min-h-screen faz a div ter o tamanho da tela, flex e flex wrap faz eles ficarem responsivos, 
            items-center faz eles centralizarem (y) na div, justify-center centraliza (x) */}

            {cards.map((props, index) => {
                {/* map pega cada um dos objetos importados em forma de props, dps ele renderiza o card e coloca os atributos do objeto */}
                {/* index foi só pra aprendizagem, mas é um atributo de map que diz qual é a posição do objeto na lista */}
                return (
                    <QrCodeCard 
                        imgSrc={props.img_src} 
                        titleText={props.title_text + " " + index.toString()} 
                        bottomText={props.bottom_text} 
                    />
                )
            })}
        </div>
    )
}

export default CardContainer
