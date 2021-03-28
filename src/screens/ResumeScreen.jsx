import React from 'react';

import Viewer, { Worker } from '@phuocng/react-pdf-viewer';

import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';


function ResumeScreen(props) {

    return(
        <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.js">
                <div style={{ height: '750px', width: "60%", margin: "auto" }}>
                    <Viewer fileUrl="resume.pdf" />
                    <p style={{textAlign: "center", fontStyle: "italic"}}>
                        Unfortunately, this viewer may not work on all devices. If you need an updated resume you can also find
                        it on my <a href={"https://www.linkedin.com/in/joshuasmaza/"} target="_blank">Linkedin Page.</a>
                    </p>
                </div>
            </Worker>

        </div>
    )
}

export default ResumeScreen;
