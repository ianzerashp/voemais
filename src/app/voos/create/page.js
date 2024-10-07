'use client'

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";

export default function Page() {

    const route = useRouter()

    function salvar(dados){
        const voos = JSON.parse(localStorage.getItem('voos')) || []
        voos.push(dados);
        localStorage.setItem('voos', JSON.stringify(voos))
        return route.push('/voos')
    }

    return (
        <Pagina titulo="Voos">

            <Formik
                initialValues={{internacional: '', identificador: '', checkin: '', embarque: '', origem: '', destino: '', empresa: '', preco: ''}}
                onSubmit={values=>salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <Form>
                        <Form.Group className="mb-3" controlId="internacional">
                            <Form.Label>Internacional</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="internacional" 
                                value={values.internacional}
                                onChange={handleChange('internacional')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="identificador">
                            <Form.Label>Identificador</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="identificador"
                                value={values.identificador}
                                onChange={handleChange('identificador')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="checkin">
                            <Form.Label>Data Check-in</Form.Label>
                            <Form.Control 
                                type="date" 
                                name="checkin"
                                value={values.checkin}
                                onChange={handleChange('checkin')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="embarque">
                            <Form.Label>Data Embarque</Form.Label>
                            <Form.Control 
                                type="date" 
                                name="embarque"
                                value={values.embarque}
                                onChange={handleChange('embarque')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="origem">
                            <Form.Label>Origem</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="origem"
                                value={values.origem}
                                onChange={handleChange('origem')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="destino">
                            <Form.Label>Destino</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="destino"
                                value={values.destino}
                                onChange={handleChange('destino')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="empresa">
                            <Form.Label>Empresa</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="empresa"
                                value={values.empresa}
                                onChange={handleChange('empresa')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="preco">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="preco"
                                value={values.preco}
                                onChange={handleChange('preco')}
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link
                                href="/empresas"
                                className="btn btn-danger ms-2"
                            >
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    )
}