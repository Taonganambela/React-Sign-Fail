import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

function Test() {

  const downloadPDF = () => {
    // Generate PDF
    const pdfBlob = <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>;

    // Convert PDF blob to a buffer
    const pdfBuffer = pdfBlob.toBuffer();

    // Trigger download
    saveAs(pdfBuffer, 'document.pdf');
  };

  return (
<div>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>  )
}

export default Test