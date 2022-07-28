import renderElements from '../templates/render-cards.hbs'
import refs from './refs'

export default function createElements (result){
    const markupElements = renderElements(result)
    refs.articelesRef.insertAdjacentHTML('beforeend', markupElements)
}


