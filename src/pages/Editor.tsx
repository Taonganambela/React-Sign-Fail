import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { backgroundColor: 'tomato' },
  section: { color: 'white', textAlign: 'center', margin: 30 }
});

const MyDocument = () => (
  <Document>
    <Page size="A8" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <Text>Section #1</Text>
      </View>
    </Page>
  </Document>
);

const Editor = () => (
  <div className='mt-14 flex'>
    <PDFDownloadLink document={<MyDocument />} fileName="document.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDfvfghfdgxcF')}
    </PDFDownloadLink>
    <PDFViewer>
    <MyDocument />
  </PDFViewer>
  </div>
);

export default Editor;
