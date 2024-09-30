'use client'

import Pagina from "@/app/components/Pagina"
import Link from "next/link"
import { Table } from "react-bootstrap"
import { IoIosAirplane } from "react-icons/io";

export default function Page() {

let empresas = JSON.parse(localStorage.getItem('empresas')) || []

    return (
        <Pagina titulo="Empresas">

            <Link
                href="/empresas/create"
                className="btn btn-primary mb-3"
            >
                <IoIosAirplane />
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Logo</th>
                    </tr>
                </thead>
                <tbody>
                    {empresas.map(item => (

                        <tr>
                            <td>1</td>
                            <td>{item.nome}</td>
                            <td>
                                <a href={item.site} target="_blank">
                                    <img src={item.logo} width={100} />
                                </a>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}