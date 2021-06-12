import React from 'react'
import { useHistory } from 'react-router'
import Button from './Button'

const KostCard = ({data}) => {
    const history = useHistory()
    const handleGotoDetail = () => {
        history.push(`/kosts/${data.id_kost}`)
    }
    return (
        <div onClick={handleGotoDetail} class="shadow border rounded-2xl cursor-pointer">
            <img className="w-full h-64 object-cover rounded-t-2xl" alt="logo" src={data.img ? process.env.PUBLIC_URL + "/kosts/" + data.img : process.env.PUBLIC_URL + "/kosts/default.png"}></img>
            <div class="grid p-6 lg:px-4">
                <p class="text-gray-500 font-semibold">{data.jenis_kost}</p>
                <h1 className="text-xl font-bold text-green-dark">{data.nama_kost}</h1>
                <h2 className="mb-3 text-green-dark">mulai <span className="font-bold">Rp  {data.harga}</span> / tahun</h2>
                <Button variant="primary" size="sm">Detail</Button>
            </div>
            
        </div>
    )
}

export default KostCard
