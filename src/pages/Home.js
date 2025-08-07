import React from "react";

const Home = () => {
    return (
        <div style={styles.mainContainer}> 
            <section style={styles.mainSection}>
                    <h1 style={styles.title}>
                        <span style={styles.titleHighlight}>Sistema de Dados Integrado</span><br/>      
                    </h1>
                    <p style={styles.description}>
                        Visualização de dados integrada para análise e insights.
                    </p>
            <div style={styles.description}>
                
            </div>
            </section>
            </div>
    );
    }

    export default Home;
    /** @type {{ [key: string]: React.CSSProperties }} */
    const styles = {

        mainContainer: {
            backgroundColor: '#0d1117',
            backgroundImage: `
                radial-gradient(circle at 50% 30%, rgba(255, 107, 53, 0.15) 0%, transparent 40%),
                linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
            `,
        },

        titleHighlight: {
            fontSize: '35px',
            marginBottom: '24px',
            lineHeight: '1.2',
            color: '#ffffff'
        },

        description: {
            fontSize: '18px',
            color: '#ffff',
            marginTop: '16px',
            lineHeight: '1.5',
        },  
    }