import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import CategoriaContext from './CategoriaContext';
import CampoEntrada from '../../comuns/CampoEntrada';
import Dialogo from '../../comuns/Dialogo';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm } = useContext(CategoriaContext);

    return (
        <Modal show={exibirForm} onHide={() => setExibirForm(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Categoria</Modal.Title>
            </Modal.Header>
            <form id="formulario" onSubmit={acaoCadastrar}>
                <Modal.Body>
                    <Dialogo id="modalEdicao" titulo="Categoria"
                        idform="formulario" acaoCadastrar={acaoCadastrar}
                        exibirForm={exibirForm} setExibirForm={setExibirForm}>
                        <Alerta alerta={alerta} />
                        <Col xs={12} md={12}>
                            <CampoEntrada value={objeto.codigo}
                                id="txtCodido" name="codigo" label="Código"
                                tipo="number" onchange={handleChange}
                                readonly={true}
                                maxCaracteres={5} />
                        </Col>
                        <Col xs={12} md={12}>
                            <CampoEntrada value={objeto.nome}
                                id="txtNome" name="nome" label="Nome"
                                tipo="text" onchange={handleChange}
                                msgvalido="OK certo" msginvalido="Informe o nome"
                                requerido={true} readonly={false}
                                maxCaracteres={40} />
                        </Col>
                    </Dialogo>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setExibirForm(false)}>
                        Fechar
                    </Button>
                    <Button variant="success" type="submit">
                        Salvar  <i className="bi bi-save"></i>
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}

export default Formulario;