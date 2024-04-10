import { ButtonContanier } from './Style'


const Button = ({title, variant ='primary', onClick}) => {
    return(

        <ButtonContanier variant={variant} onClick={onClick}>
            {title}
        </ButtonContanier>
    )
};


export {Button}