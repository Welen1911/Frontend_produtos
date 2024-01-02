import axios from "axios";
import { useState } from "react"

export const Create = ({ produtos, setProdutos }) => {
    const [create, setCreate] = useState(false);
    const [produto, setProduto] = useState();

    const store = () => {
        console.log(produto);
        axios.post('http://localhost:8000/api/', {
            "name": produto
        }).then(response =>
            setProdutos(response.data)
        ).catch(error => console.log(error));
    }

    return (
        <>
            {create ?
                <>
                    <button type="button" onClick={() => setCreate(!create)} className="text-white bg-blue-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-blue-800">
                        Cancelar
                    </button>
                    <form class="max-w-sm ml-5">
                        <div class="mb-3">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nome do produto:</label>
                            <input type="text" id="email" onChange={(e) => setProduto(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Goiaba" required />
                        </div>
                        <button type="submit" onClick={(e) => {
                            e.preventDefault();
                            console.log(produto);
                            store();
                        }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cadastrar</button>
                    </form>
                </>
                :
                <button type="button" onClick={() => setCreate(!create)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Cadastrar Produto
                </button>}

        </>
    )
}