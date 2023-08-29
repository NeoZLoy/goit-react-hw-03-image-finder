
import { StyledList, StyledItem, StyledImage } from "./Gallery.styled"

export const Gallery = ({images, onLoadMoreClick}) => {
    return(
        <>
         <StyledList>
        {images.map(image => {
            return(
            <StyledItem key = {image.id}>
                <StyledImage src={image.webformatURL} alt = {image.id}/>
            </StyledItem>
            )
           
        })}
        
        </StyledList>
        {images.length > 0 && (
            <button onClick={onLoadMoreClick}>Load More</button>
        )}
        </>
       
    )
}
