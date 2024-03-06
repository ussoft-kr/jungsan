import React, {useState, KeyboardEvent} from 'react';
import styles from '@/styles/Board.module.css';
import {Button, Form, Image, InputGroup} from "react-bootstrap";
import {useRouter} from "next/router";


interface BoardSearchProps {
    onSearch: (searchTrem : string) => void;
}


function BoardSearch(props:BoardSearchProps) {

    const [searchTerm, setSearchTerm] = useState('');
     const router = useRouter() ;

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.onSearch(searchTerm);
            event.preventDefault();

        }
    };


    return (
        <div className={styles.searchbox}>
            <InputGroup className={styles.groupbox}>
                <Form.Select>
                    <option value={'제목'}>제목</option>
                </Form.Select>
                <Form.Control
                    type={'text'}
                    placeholder={'검색어를 입력하세요'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <Button type={'button'} onClick={() => props.onSearch(searchTerm)}>
                    <Image src={'/sub/search.svg'} alt={'sub-icon'} />
                </Button>
            </InputGroup>
        </div>
    )
}

export default BoardSearch