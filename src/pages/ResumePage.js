import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

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
        <div class="d-flex justify-content-center">
            <Document file={resume}>
                <Page pageNumber={1} onLoadSuccess={removeTextLayerOffset} />
            </Document>
        </div>
    );

}

export default ResumePage;