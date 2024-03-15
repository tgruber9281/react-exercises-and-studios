import './styles.css';



function Button(props) {
   function onLearnMore(){
      alert(`Learn more ${props.name}`)
   }   
   return ( 
         <button name={props.name} onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;