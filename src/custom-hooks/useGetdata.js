import  {useEffect, useState} from 'react'
import { db } from '../firebase.config'
import { collection, getDocs } from 'firebase/firestore'
// import { async } from '@firebase/util'


const useGetdata = collectionName => {

    const [data, setData] = useState([]);
    const [loading,SetLoading ]= useState(true)
    const collectionRef = collection(db, collection)
    
    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collectionRef);
            setData(data.docs.map(doc=>({...doc.data(), id: doc.id})))
            SetLoading(false)
        }
        getData()
    },[collectionRef])

  return {data, loading}
}

export default useGetdata