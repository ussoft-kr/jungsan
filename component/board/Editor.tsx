import React, {useRef, useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';


interface EditorComponentProps {
    onContentChange: (newValue: string) => void;
    initialValue?: string;
}



function EditorComponent({onContentChange, initialValue = ''} : EditorComponentProps) {
    const [value, setValue] = useState(initialValue);
    const editorRef = useRef<any>(null);

    return (
        <Editor
            apiKey="3sidqv4j3ppm22f1bs243i3niayqd881zwrhuouq3ha4q9xz"
            value={value}
            onInit={(_evt, editor) => {
                editorRef.current = editor; // 에디터 인스턴스를 ref에 저장
                editor.setContent(initialValue); // 초기 내용 설정
            }}
            onEditorChange={(newValue, _editor) => {
                setValue(newValue);
                onContentChange(newValue);
            }}
            init={{
                height: 700,
                menubar: true,
                relative_urls:false,
                remove_script_host:false,
                language: 'ko_KR',
                language_url: '/lang/ko_KR.js',
                plugins: [
                    'lists',
                    'link',
                    'image',
                    'charmap',
                    'preview',
                    'searchreplace',
                    'fullscreen',
                    'media',
                    'table',
                    'code',
                    'help',
                    'emoticons',
                    'codesample',
                    'quickbars',
                ],
                //images_file_types : 'jpeg jpg gif png svg',
                images_upload_url: `${window.location.origin}/data/board`,
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                toolbar:
                    'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'lists table link charmap searchreplace | ' +
                    'image media codesample emoticons fullscreen preview | ' +
                    'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                quickbars_insert_toolbar: false,
                quickbars_selection_toolbar: false,
            }}
        />
    );
}

export default EditorComponent;
