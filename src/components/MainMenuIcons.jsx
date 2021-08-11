
import { FaPollH,FaCommentDollar,FaVoteYea,FaRegMoneyBillAlt,FaTruckMonster,FaIdBadge,FaHistory,
    FaFileMedicalAlt,FaFeatherAlt,FaCreditCard,FaChalkboardTeacher,FaArrowAltCircleUp,
    FaAddressCard,FaCashRegister,FaClock,FaCoins} from "react-icons/fa";


export default function GetIcons (props) {
    return (
        <div>
            {props.icon === '1' 
            ? <FaPollH style={{fontSize: '23px', fontWeight: '300px'}} /> :
            props.icon === '2' 
            ? <FaCommentDollar style={{fontSize: '23px', fontWeight: '300px'}} /> :
            props.icon === '3' 
            ? <FaRegMoneyBillAlt style={{fontSize: '23px', fontWeight: '300px'}} /> :
            props.icon === '4' 
            ? <FaVoteYea style={{fontSize: '23px', fontWeight: '300px'}} />  :
            props.icon === '5' 
            ? <FaTruckMonster style={{fontSize: '23px', fontWeight: '300px'}} />  :
            props.icon === '6' 
            ? <FaIdBadge style={{fontSize: '23px', fontWeight: '300px'}} />  :
            props.icon === '7' 
            ? <FaHistory style={{fontSize: '23px', fontWeight: '300px'}} />  :
            props.icon === '8' 
            ? <FaFileMedicalAlt style={{fontSize: '23px', fontWeight: '300px'}} />  :
            props.icon === '9' 
            ? <FaFeatherAlt style={{fontSize: '23px', fontWeight: '300px'}} />  :
            props.icon === '10' 
            ? <FaCreditCard style={{fontSize: '23px', fontWeight: '300px'}} />  :
            props.icon === '11' 
            ? <FaChalkboardTeacher style={{fontSize: '23px', fontWeight: '300px'}} />  :
            props.icon === '12' 
            ? <FaArrowAltCircleUp style={{fontSize: '23px', fontWeight: '300px'}} />  :
            props.icon === '13' 
            ? <FaAddressCard style={{fontSize: '23px', fontWeight: '300px'}} />  :
            props.icon === '14' 
            ? <FaCashRegister style={{fontSize: '23px', fontWeight: '300px'}} />  :
            props.icon === '15' 
            ? <FaClock style={{fontSize: '23px', fontWeight: '300px'}} />  :
            <FaCoins style={{fontSize: '23px', fontWeight: '300px'}} />              
            }
            
        </div>
    )
}