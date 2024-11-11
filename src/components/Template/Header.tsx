export interface Headerprops{
    className?: string;
}

export default function Header(props:Headerprops){
    return(
        <header className={` flex items-center px-7 bg-green-500 border-b border-zinc-800 ${props.className ?? ''}`}>
            cabeçalho
        </header>
    )
}