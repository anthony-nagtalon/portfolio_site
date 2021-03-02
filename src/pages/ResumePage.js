import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import resume from '../assets/pdfs/resume.pdf';

function ResumePage(props) {

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

    function removeTextLayerOffset() {
        const textLayers = document.querySelectorAll(
            '.react-pdf__Page__textContent'  
        );
        textLayers.forEach((layer) => {
            const { style } = layer;
            style.top = '0';
            style.left = '0';
            style.transform = '';
        });
    }

    return (
        <div className="d-flex justify-content-center">
            <Document file={resume} size='A4'>
                <Page 
                pageNumber={1} 
                renderTextLayer={false}
                renderAnnotationLayer={true}
                width={900} />
            </Document>
        </div>
    );

}

export default ResumePage;