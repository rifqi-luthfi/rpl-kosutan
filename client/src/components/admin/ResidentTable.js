import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTable, useFilters } from 'react-table'
import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ConfirmationModal from '../ConfirmationModal'
import Alert from '../Alert'
import axios from 'axios'

const ResidentTable = ({ data }) => {
    const [filterInput, setFilterInput] = useState("");
    const [deleteTarget, setDeleteTarget] = useState(null)
    const [show, setShow] = useState(false)
    const [error, setError] = useState()
    const [open, setOpen] = useState(false)
    const [openDanger, setOpenDanger] = useState(false)

    const history = useHistory()
    

    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("nama_kost", value); 
        setFilterInput(value);
    };
    const columns = React.useMemo (
        () => [
            {
                Header: "Id Sewa",
                accessor: "id_sewa"
            },
            {
                Header: "Id",
                accessor: "id_penyewa"
            },
            {
                Header: "Nama Awal",
                accessor: "nama_awal"
            },
            {
                Header: "Nama Akhir",
                accessor: "nama_akhir"
            }, 
            {
                Header: "Tanggal Sewa",
                accessor: "tanggal_sewa"
            }, 
            {
                Header: "Status",
                accessor: "status"
            },
            {
                Header: "Delete",
                accessor: "delete",
                id: 'delete',
                Cell: (tableProps) => (
                    <>
                        <FontAwesomeIcon onClick={(e) => handleOpenModal(e, tableProps)} className="text-red-400 hover:text-red-800 text-xl cursor-pointer transition-all" icon={faTrash}/>
                    </>
                )
            }
        ], []
    )
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setFilter 
    
      } = useTable({
        columns,
        data,
        initialState: { pageIndex: 1 },
      },
        useFilters
      )
    const handleOnClickRow = (e, row) => {
        history.push(`/dashboard/kost/detail/${row.original.id_kost}`)
    }
    const handleAddKost = () => {
        history.push("/dashboard/kost/add")
    }
    const handleEditKost = (e, tableProps) => {
        e.stopPropagation();
    }
    const handleOpenModal = (e, tableProps) => {
        e.stopPropagation();
        setDeleteTarget(tableProps)
        setShow(true)
    }
    const handleDeleteKost = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.delete(`/sewa/deleteKostResidentById`, {
                params: {
                    id: deleteTarget.row.original.id_sewa
                }
            })
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 3000);
            setShow(false)
            
        } catch (error) {
            setError(error)
            setOpenDanger(true)
            setTimeout(() => {
                setOpenDanger(false)
            }, 2500);
        }
    }
    return (
        <>
        <Alert name="alert-success" variant='success' open={open} handleClose={() => setOpen(false)}>Successfuly deleted!</Alert>
        <Alert name="alert-danger" variant='danger' open={openDanger} handleClose={() => setOpenDanger(false)}>{error}</Alert>
        <ConfirmationModal show={show} setShow={setShow} message={"Are you sure you want to delete this kost resident?"} onContinue={(e) => handleDeleteKost(e)}/>
        <div className="flex justify-between my-3 items-center">
            <span className="relative">
                <input value={filterInput} onChange={handleFilterChange} className="border p-2 focus:outline-none rounded-lg text-gray-800 w-60" placeholder="search resident"></input>
                <FontAwesomeIcon className="absolute top-4 text-gray-200 right-2" icon={faSearch}></FontAwesomeIcon>
            </span>
        </div>
        <div className="border z-30 overflow-x-scroll md:overflow-hidden">
            <table className="bg-white rounded-xl min-w-full divide-y divide-gray-200 " {...getTableProps()}>
                <thead className="bg-gray-50">
                    {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                        <th className="text-left p-3 border text-green-dark" {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr className="cursor-pointer hover:bg-gray-100" {...row.getRowProps()} >
                            {row.cells.map((cell) => {
                                return <td onClick={((e) => handleOnClickRow(e, row))} className="p-5" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                            })}
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ResidentTable
