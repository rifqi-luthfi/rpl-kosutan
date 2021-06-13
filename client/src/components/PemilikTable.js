import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTable, useFilters } from 'react-table'
import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ConfirmationModal from './ConfirmationModal'
import axios from 'axios'
import Alert from './Alert'

const PemilikTable = ({ data }) => {
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
              Header: "Id",
              accessor: "id_kost"
            },
            {
              Header: "Nama kost",
              accessor: "nama_kost"
            },
            {
              Header: "Alamat kost",
              accessor: "alamat_kost"
            }, 
            {
              Header: "Harga",
              accessor: "harga"
            },
            {
              Header: "Jenis kost",
              accessor: "jenis_kost"
            },     
            {
              Header: "Edit",
              accessor: "edit",
              id: 'edit',
              Cell: (tableProps) => (
                  <>
                      <FontAwesomeIcon onClick={(e) => handleEditKost(e, tableProps) } className="text-green hover:text-green-darkest text-xl cursor-pointer transition-all" icon={faEdit}/>
                  </>
              )
            },
            {
              Header: "Delete",
              accessor: "delete",
              id: 'delete',
              Cell: (tableProps) => (
                  <>
                      <FontAwesomeIcon onClick={(e) => handleOpenModal(e, tableProps.row.original.id_kost)} className="text-red-400 hover:text-red-800 text-xl cursor-pointer transition-all" icon={faTrash}/>
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
        console.log(row.original)
    }
    const handleAddKost = () => {
        history.push("/dashboard/addkost")
    }
    const handleEditKost = (e, tableProps) => {
        e.stopPropagation();
        console.log(tableProps.row.original)
    }
    const handleOpenModal = (e, id) => {
        setShow(true)
        setDeleteTarget(id)
    }
    const handleDeleteKost = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.delete(`kost/deleteKost`, {
                params: {
                    id: deleteTarget
                }
            })
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 3000);
            setShow(false)
            
        } catch (error) {
            setError(error.response.data.msg)
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
            <ConfirmationModal show={show} setShow={setShow} message={"Are you sure you want to delete your kost? this action cannot be undone"} onContinue={(e) => handleDeleteKost(e)}/>
            <div className="flex justify-between my-3 items-center">
                <span className="relative">
                    <input value={filterInput} onChange={handleFilterChange} className="border p-2 focus:outline-none rounded-lg text-gray-800 w-60" placeholder="search kost"></input>
                    <FontAwesomeIcon className="absolute top-4 text-gray-200 right-2" icon={faSearch}></FontAwesomeIcon>
                </span>
                <button onClick={handleAddKost}  className="focus:outline-none bg-green text-white font-semibold rounded-md hover:bg-green-dark transition duration-300 ease-in-out py-3 px-6">Add kost</button>
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
                            <tr className="cursor-pointer hover:bg-gray-100" {...row.getRowProps()} onClick={(e) => handleOnClickRow(e, row)}>
                                {row.cells.map((cell) => {
                                    return <td className="p-5" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                })}
                            </tr>
                        );
                        })}
                    </tbody>
                </table>
                <div className="pagination">
                
                </div>
            </div>
        </>
    )
}

export default PemilikTable


