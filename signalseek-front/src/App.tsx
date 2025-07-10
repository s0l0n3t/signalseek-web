import { useEffect, useState} from 'react'
import './App.css'


interface Product {
  id: number;
  popularity_score: number;
  weight: number;
  image_yellow: string;
  image_rose: string;
  name: string;
  image_white: string;
  price: number;
}

function App() {
  const[data, setProducts] = useState<Product[]>([]);
  console.log();
  useEffect(() => {
    const fetchProd = async() => {
        
          const fetchData = await fetch(`${import.meta.env.VITE_REACT_API_URL}/prod/productlist`,{
            method:'GET',
            headers:{
              "Content-Type":"application/json",
              'Accept': 'application/json',
              'Access-Control-Allow-Origin':'*',
              'Vary': 'Origin',
              'Access-Control-Allow-Headers': 'Content-Type',
            },
            
          })
          const jsonProd = await fetchData.json() as Product[]
          setProducts(jsonProd);
      }
      fetchProd()
  },[data])
  return (
    <div className="App p-10">
  <table className="border border-gray-700 border-spacing-6">
    <thead className="bg-gray-300">
      <tr>
        <th className="border border-gray-700 p-2 text-left content-center">Id</th>
        <th className="border border-gray-700 p-2 text-left content-center">Name</th>
        <th className="border border-gray-700 p-2 text-left content-center">Price</th>
      </tr>
    </thead>
    <tbody>
      {data.map(dataVar => (
        <tr key={dataVar.id} className="hover:bg-gray-50">
          <td className="border border-gray-300 p-2">{dataVar.id}</td>
          <td className="border border-gray-300 p-2">{dataVar.name}</td>
          <td className="border border-gray-300 p-2">{dataVar.price}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default App
