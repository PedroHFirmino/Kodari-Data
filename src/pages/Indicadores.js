import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useState } from "react";
import { FaTicketAlt, FaUserFriends, FaCalendarAlt, FaChevronDown, FaFileAlt, FaDownload } from 'react-icons/fa';

const Indicadores = () => {
    const [activeCard, setActiveCard] = useState('Tickets');
        const reportHistoryData = [
        { id: 1, text: "Teste - 08/08/2025" },

    ];
    return (
        <Layout>
            <div style={styles.container}>
                <h1 style={styles.mainTitle}>Indicadores - Movidesk</h1>

  
                <div style={styles.selectionContainer}>

                    <div 
                        style={activeCard === 'Tickets' ? { ...styles.selectionCardBase, ...styles.selectionCardActive } : styles.selectionCardBase}
                        onClick={() => setActiveCard('Tickets')}
                    >
                        <div style={{ ...styles.selectionCardIcon, color: activeCard === 'Tickets' ? '#ff6b35' : '#888' }}><FaTicketAlt size={28} /></div>
                        <p style={styles.selectionCardLabel}>Tickets</p>
                        <div style={{ ...styles.selectionCardLine, backgroundColor: activeCard === 'Tickets' ? '#ff6b35' : '#333' }}></div>
                    </div>

                    <div 
                        style={activeCard === 'Agentes' ? { ...styles.selectionCardBase, ...styles.selectionCardActive } : styles.selectionCardBase}
                        onClick={() => setActiveCard('Agentes')}
                    >
                        <div style={{ ...styles.selectionCardIcon, color: activeCard === 'Agentes' ? '#ff6b35' : '#888' }}><FaUserFriends size={28} /></div>
                        <p style={styles.selectionCardLabel}>Agentes</p>
                        <div style={{ ...styles.selectionCardLine, backgroundColor: activeCard === 'Agentes' ? '#ff6b35' : '#333' }}></div>
                    </div>
                </div>

                <div style={styles.filtersContainer}>
                    <div style={styles.datePicker}>
                        <FaCalendarAlt style={{ color: '#888' }} />
                        <select style={styles.select}>
                            <option>Últimos 7 dias</option>
                            <option>Últimos 30 dias</option>
                            <option>Últimos 90 dias</option>
                            <option>Últimos 6 meses</option>
                        </select>
                        <FaChevronDown style={{ color: '#888' }} />
                    </div>
                    <div style={styles.datePicker}>
                        <FaCalendarAlt style={{ color: '#888' }} />
                        <select style={styles.select}>
                            <option>Últimos 7 dias</option>
                            <option>Últimos 15 dias</option>
                            <option>Últimos 30 dias</option>
                            <option>Últimos 90 dias</option>
                            <option>Últimos 6 meses</option>
                        </select>
                        <FaChevronDown style={{ color: '#888' }} />
                    </div>
                </div>

                <button style={styles.button}>Gerar Relatório</button>


                <div style={styles.historyContainer}>
                    <h2 style={styles.historyTitle}>Histórico de Relatórios</h2>
                    <div style={styles.historyList}>
     
                        {reportHistoryData.map(report => (
                            <div key={report.id} style={styles.historyItem}>
                                <div style={styles.historyFileInfo}>
                                    <FaFileAlt />
                                    <span>{report.text}</span>
                                </div>
                                <a href="#" style={styles.historyDownloadLink}>
                                    <span>Download</span>
                                    <FaDownload />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Layout>
    );
};

    export default Indicadores;
    /** @type {{ [key: string]: React.CSSProperties }} */
    const styles = {
    container: { 
        maxWidth: '900px', 
        margin: '0 auto' 
    },
    mainTitle: { 
        color: '#fff', 
        textAlign: 'center', 
        fontSize: '2.5rem', 
        marginBottom: '40px' 
    },

    selectionContainer: { 
        display: 'flex', 
        gap: '20px', 
        justifyContent: 'center' 
    },
    selectionCardBase: {
        backgroundColor: '#161b22',
        padding: '30px 40px',
        borderRadius: '12px',
        cursor: 'pointer',
        textAlign: 'center',
        width: '200px',
        border: '2px solid transparent',
        transition: 'all 0.2s ease-in-out',
    },
    selectionCardActive: {
        borderColor: '#ff6b35',
        transform: 'translateY(-5px)',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
    },
    selectionCardIcon: {
        marginBottom: '15px',
    },
    selectionCardLabel: { 
        color: '#fff', 
        margin: 0, 
        fontSize: '1.2rem', 
        fontWeight: 'bold' 
    },
    selectionCardLine: { 
        height: '2px', 
        width: '40px', 
        margin: '15px auto 0 auto' 
    },
   
    filtersContainer: { 
        display: 'flex', 
        gap: '20px', 
        justifyContent: 'center', 
        margin: '40px 0' 
    },
    datePicker: { 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: '#161b22', 
        padding: '10px 15px', 
        borderRadius: '8px', 
        gap: '10px' 
    },
    select: { 
        backgroundColor: 'transparent', 
        border: 'none', 
        color: '#fff', 
        outline: 'none', 
        appearance: 'none', 
        cursor: 'pointer' 
    },

    button: { 
        display: 'block', 
        width: '100%', 
        padding: '15px', 
        borderRadius: '8px', 
        border: 'none', 
        backgroundColor: '#ff6b35', 
        color: '#fff', 
        fontSize: '1.1rem', 
        fontWeight: 'bold', 
        cursor: 'pointer', 
        transition: 'transform 0.2s', 
    },

    historyContainer: { 
        marginTop: '60px' 
    },
    historyTitle: { 
        color: '#fff', 
        borderBottom: '1px solid #333', 
        paddingBottom: '10px', 
        marginBottom: '20px' 
    },
    historyList: { 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '10px' 
    },
    historyItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#161b22',
        padding: '15px 20px',
        borderRadius: '8px',
    },
    historyFileInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        color: '#ccc',
    },
    historyDownloadLink: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: '#ff6b35',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
};