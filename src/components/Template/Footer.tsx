export interface Footerprops {
    className?: string;
} 

export default function Footer(props: Footerprops){
    return(
        <footer className={`bg-purple-500 ${props.className ?? ""}`}>Rodapé</footer>
    )
}