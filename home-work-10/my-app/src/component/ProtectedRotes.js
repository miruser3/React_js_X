import { useSelector } from 'react-redux';
import { currentUserSelector } from '../reducers/Selectors';
import LoadingToDirect from './LoadingToDirect';

const ProtectedRotes = ({children}) => {
    const user=useSelector(currentUserSelector);

    if (!user) {
        return <LoadingToDirect/>
    }
    return children
};

export default ProtectedRotes;