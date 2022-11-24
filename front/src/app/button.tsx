export const ButtonBack = (props: any) =>{
    if(props.prev == null) return null;
    
    return (
        <button onClick={props.onClick}>
        &lt;
        </button>
    )
}

export const ButtonNext = (props: any) =>{
    if(props.next == null) return null;
    return (
        <button onClick={props.onClick}>
        &gt;
        </button>
    )

}