import React from 'react';
import styles from '@/styles/Board.module.css';
import {Button, Form, Image, InputGroup} from "react-bootstrap";

function BoardSearch() {
    return (
        <div className={styles.searchbox}>
            <InputGroup className={styles.groupbox}>
                <Form.Select>
                    <option value={'제목'}>제목</option>
                </Form.Select>
                <Form.Control type={'text'} placeholder={'검색어를 입력하세요'} />
                <Button type={'button'}>
                    <Image src={'/sub/search.svg'} alt={'sub-icon'} />
                </Button>
            </InputGroup>
        </div>
    )
}

export default BoardSearch