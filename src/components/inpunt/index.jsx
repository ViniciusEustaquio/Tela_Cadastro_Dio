import { InputContanier, IconContanier, InputText, ErroText} from "./style";
import { Controller } from "react-hook-form"


const Input = ({LeftIcon, name, control,errorMessege, ...rest}) => {
  return (<>
    {errorMessege ? <ErroText>{errorMessege}</ErroText> : null}
    <InputContanier>
        {LeftIcon ? (<IconContanier>{LeftIcon}</IconContanier>) : null}
        <Controller 
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <InputText {...rest} {...field} />} /> 
    </InputContanier>
    </>
  );
};

export { Input };
