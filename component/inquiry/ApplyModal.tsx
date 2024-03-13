import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from 'styles/Layout.module.css'

function ApplyModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={styles.modalwrap}>
            <Button type={'button'} onClick={handleShow} className={styles.modalactivebtn}>
                약관보기
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton className={styles.modalheader}>
                    <Modal.Title>중산기업 개인정보 처리방침</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalbody}>
                    Woohoo, you are reading this text in a modal!
                </Modal.Body>
                <Modal.Footer className={styles.modalfooter}>
                    <Button type={'button'} onClick={handleClose}>
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ApplyModal;