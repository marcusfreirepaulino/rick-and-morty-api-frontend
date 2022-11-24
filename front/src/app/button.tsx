import { ButtonNextProps, ButtonPrevProps } from "./interfaces";

export const ButtonBack = (props: ButtonPrevProps) =>{
    if(props.prev == null) return null;
    
    return (
        <button onClick={props.onClick}>
        &lt;
        </button>
    )
}

export const ButtonNext = (props: ButtonNextProps) =>{
    if(props.next == null) return null;
    return (
        <button onClick={props.onClick}>
        &gt;
        </button>
    )

}