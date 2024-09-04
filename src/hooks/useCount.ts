import { useSelector } from 'react-redux';
import { Count } from '../redux/slices/count';


export default function useCount() {
  return useSelector((state: { count: Count }) => state.count.num);
}