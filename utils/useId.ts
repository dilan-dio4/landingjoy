import { useId } from 'react';

// const useId = () => {
//     const [id, setId] = useState<number>();
//     useEffect(() => {
//         setId(Math.round(Math.random() * 100) + 1);
//     }, []);
//     return id;
// };

const _useId = () => {
    const id = useId().replaceAll(":", "a")
    return id
}

export default _useId;
