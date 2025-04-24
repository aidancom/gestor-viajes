import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Estilos del PDF
const styles = StyleSheet.create({
  page: {
    padding: 30
  },
  section: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  box : {
    borderBottomWidth: 1,
    borderBottomColor : '#222222',
    borderBottomStyle: 'solid',
    marginBottom: 5,
  },
  threeColumns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10
  },
  column: {
    flex: 1,
    padding: 10
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  informationText: {
    fontSize: 10,
    paddingBottom: 5
  }
});

const PDFTemplate = ({nextTravel}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Información sobre el viaje a {nextTravel?.general?.travelDestination}</Text>
        <View style={styles.box} />
      </View>
      <View style={styles.threeColumns}>
        <View style={styles.column}>
          <Text style={styles.subtitle}>Información general</Text>
          <View style={styles.box} />
            <Text style={styles.informationText}>Motivo del viaje: {nextTravel?.general?.travelReason}</Text>
            <Text style={styles.informationText}>Salida desde: {nextTravel?.general?.travelDeparturePlace}</Text>
            <Text style={styles.informationText}>Fecha salida: {nextTravel?.general?.travelDepartureDate}</Text>
            <Text style={styles.informationText}>Fecha regreso: {nextTravel?.general?.travelReturnDate}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subtitle}>Alojamiento</Text>
          <View style={styles.box} />
            <Text style={styles.informationText}>Nombre del alojamiento: {nextTravel?.accommodation?.travelHotelName}</Text>
            <Text style={styles.informationText}>Direccion: {nextTravel?.accommodation?.travelHotelDirection}</Text>
            <Text style={styles.informationText}>Télefono: {nextTravel?.accommodation?.travelHotelPhone}</Text>
            <Text style={styles.informationText}>Tipo de habitación: {nextTravel?.accommodation?.travelHotelRoomType}</Text>
            <Text style={styles.informationText}>Fecha Check-In: {nextTravel?.accommodation?.travelCheckIn}</Text>
            <Text style={styles.informationText}>Fecha Check-Out: {nextTravel?.accommodation?.travelCheckOut}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.subtitle}>Costos del viaje</Text>
          <View style={styles.box} />
            <Text style={styles.informationText}>Costo viaje: {nextTravel?.cash?.travelCost}€</Text>
            <Text style={styles.informationText}>Gastos Anticipados: {nextTravel?.cash?.travelBills}€</Text>
            <Text style={styles.informationText}>Método de pago: {nextTravel?.cash?.travelPaymentMethod}</Text>
            <Text style={styles.informationText}>Total coste del viaje: {parseInt(nextTravel?.cash?.travelCost) + parseInt(nextTravel?.cash?.travelBills)}€</Text>
        </View>
      </View>
    </Page>
  </Document>
);

const GeneratePDF = ({nextTravel}) => (
  <PDFDownloadLink document={<PDFTemplate nextTravel={nextTravel}/>} fileName="informacion_viaje.pdf">
      <div>
        <button className='border-2 border-solid border-[#9487f5] bg-[#9487f5] pt-[5px] pr-[15px] pb-[5px] pl-[15px] mt-2 rounded-[10px] transition-all duration-200 ease-linear cursor-pointer text-[#fff] hover:bg-[#fff] hover:text-[#222]'>Descargar PDF</button>
      </div>
  </PDFDownloadLink>
);

export default GeneratePDF;