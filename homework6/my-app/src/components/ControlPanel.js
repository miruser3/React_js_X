import {  useSelector } from 'react-redux';
import {messegeSelector} from '../MessegeSelector';
import { useParams } from 'react-router-dom';

const ControlPanel = () => {
    const messeges = useSelector(messegeSelector);
   
  const {id}=useParams();
   const messege=messeges.filter((item)=>{
    if(!id) return true;
     return item.chatId ===Number(id);
   })

    
   

    return (
        <div>
            <div className="container">
             {messege.map((item)=>(
                <div key={item.id}>
                     <div>{item.massages}</div>
                     <button>delete</button>
                </div>
             ))}

            </div>

        </div>
    );
};

export default ControlPanel;