import refs from "./refs";
import createElements from "./create-elements";
import Notiflix from "notiflix";
import scroll from "./scroll";
import seacrRequire from "../index";

 function intersectionObject () {
    const options = {
        rootMargin: '150px',
    }
    const io = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry =>{
            if(entry.isIntersecting && !seacrRequire.loading ){
                seacrRequire.fetchArticles()
                .then(response => {
                    createElements(response)
                    scroll()
                })
                .catch(error => {
                    if(error.response.status === 400){
                        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.")
                    } console.log(error)
                })
                .finally(() => seacrRequire.loading = false )
            }
        })
    }, options)

    io.observe(refs.observerRef)
}
 
export default intersectionObject
