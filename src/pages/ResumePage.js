import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { StyleSheet } from '@react-pdf/renderer';

import resume from '../assets/pdfs/resume.pdf';

function ResumePage(props) {

    const styles = StyleSheet.create({
       page: { backgroundColor: 'tomato' } 
    });

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
                onLoadSuccess={removeTextLayerOffset} 
                style={styles.page}
                width={1000} />
            </Document>
        </div>
    );

}

export default ResumePage;