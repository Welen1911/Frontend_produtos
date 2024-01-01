import axios from "axios";
import { useEffect, useState } from "react";

export const Table = () => {

    const [produtos, setProdutos] = useState([]);

    const [edit, setEdit] = useState([false]);

    const destroy = (id) => {
        axios.delete('http://localhost:8000/api/' + id).then(
            response => setProdutos(response.data)
        ).catch(error => console.log(error))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/')
            .then(response => {
                setProdutos(response.data);
                // setProdutos(produto => [...produto.map(pro => pro.edit = false)]);
            })
            .catch(error => console.log(error));
            let editProdutos = produtos;
            editProdutos.map(produto => {
                produto.edit = false;
            });
            setProdutos(editProdutos);
    }, []);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto, index) => (
                        <tr key={produto.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {!produto.edit ? produto.name :
                                    <input key={produto.key} value={produto.name} className="dark:text-black" />
                                }
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={() => 
                                    setProdutos([...produtos, produto.edit = !produto.edit])
                                } className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</button>
                                <button onClick={() => destroy(produto.id)} className="ml-3 font-medium dark:text-red-500 hover:underline">Deletar</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    );
}