/* eslint-disable react/prop-types */
import React from "react";
import { Document, Page, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
});

const PDFDocument = ({ children }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {children}
    </Page>
  </Document>
);

export default PDFDocument;
