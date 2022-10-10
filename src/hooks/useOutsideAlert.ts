import  {  useEffect  } from "react";

function useOutsideAlerter(ref : any,stop:boolean,cb? : (()=>void),) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event:MouseEvent){
        if (ref.current && !ref.current.contains(event.target)) {
          if(cb && !stop){
            cb()
          }
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref,stop,cb]);
  }

  export default useOutsideAlerter