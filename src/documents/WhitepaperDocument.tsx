import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Register a font (optional, using default for now but good practice to have structure)
Font.register({
    family: 'Helvetica-Bold',
    src: 'https://fonts.gstatic.com/s/helveticaneue/v70/1Ptsg8zYS_SKggPNyC0IT4ttDfA.ttf',
});

const styles = StyleSheet.create({
    page: {
        padding: 50,
        fontFamily: 'Helvetica',
        fontSize: 12,
        lineHeight: 1.5,
        backgroundColor: '#ffffff',
    },
    header: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#111',
        paddingBottom: 10,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 10,
        color: '#1a1a1a',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
    },
    section: {
        marginBottom: 15,
    },
    heading: {
        fontSize: 16,
        fontFamily: 'Helvetica-Bold',
        marginTop: 15,
        marginBottom: 10,
        color: '#2d3748',
    },
    subheading: {
        fontSize: 14,
        fontFamily: 'Helvetica-Bold',
        marginTop: 10,
        marginBottom: 8,
        color: '#4a5568',
    },
    text: {
        marginBottom: 10,
        textAlign: 'justify',
    },
    listItem: {
        marginLeft: 15,
        marginBottom: 5,
    },
    bullet: {
        width: 10,
        fontSize: 20,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 50,
        right: 50,
        textAlign: 'center',
        color: 'grey',
        fontSize: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 10,
    },
    view: {
        marginBottom: 10,
    }
});

const WhitepaperDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Quantix (QTX)</Text>
                <Text style={styles.subtitle}>Whitepaper Version 1.0</Text>
            </View>

            {/* Abstract */}
            <View style={styles.section}>
                <Text style={styles.heading}>Abstract</Text>
                <Text style={styles.text}>
                    Quantix (QTX) is a next-generation blockchain designed to withstand the emerging threats
                    of quantum computing. Leveraging the Crystals-Dilithium post-quantum signature algorithm
                    and an energy-efficient Proof-of-Stake consensus mechanism, Quantix provides long-term
                    security for decentralized finance, ensuring user assets remain secure even in the post-quantum era.
                </Text>
            </View>

            {/* Introduction */}
            <View style={styles.section}>
                <Text style={styles.heading}>Introduction</Text>
                <Text style={styles.text}>
                    Modern cryptography largely relies on the mathematical difficulty of integer factorization (RSA)
                    or the discrete logarithm problem on elliptic curves (ECDSA). However, the advent of quantum
                    computers and Shor's algorithm threatens to break these foundations, rendering almost all current
                    cryptocurrencies (Bitcoin, Ethereum, etc.) vulnerable.
                </Text>
                <Text style={styles.text}>
                    Quantix was created to address this existential threat. By natively integrating post-quantum
                    cryptography (PQC) into the core of the protocol, Quantix guarantees transaction integrity and
                    fund ownership against adversaries equipped with quantum computing power.
                </Text>
            </View>

            {/* Vision */}
            <View style={styles.section}>
                <Text style={styles.heading}>Vision</Text>
                <Text style={styles.text}>Our vision is to build a perdurable digital financial infrastructure.</Text>

                <View style={styles.view}>
                    <Text style={styles.text}>• Absolute Security: Protection against both classical and quantum attacks.</Text>
                    <Text style={styles.text}>• Sustainability: A Proof-of-Stake (PoS) consensus with a low carbon footprint.</Text>
                    <Text style={styles.text}>• Accessibility: Simple tools for mass adoption (Instant Wallet Generator, clear interfaces).</Text>
                </View>
            </View>

            {/* Technology */}
            <View style={styles.section} break>
                <Text style={styles.heading}>3. Technology</Text>

                <Text style={styles.subheading}>3.1 Post-Quantum Cryptography</Text>
                <Text style={styles.text}>
                    Quantix uses Crystals-Dilithium, a digital signature algorithm selected by NIST (National Institute
                    of Standards and Technology) for post-quantum cryptography standardization.
                </Text>
                <Text style={styles.text}>• Security Level: Dilithium2 (equivalent to ~128 bits of quantum security).</Text>
                <Text style={styles.text}>• Performance: Fast signature verification and optimized key sizes for blockchain.</Text>
                <Text style={styles.text}>• Keys:</Text>
                <Text style={{ ...styles.text, marginLeft: 15 }}>- Public Key: 1312 bytes</Text>
                <Text style={{ ...styles.text, marginLeft: 15 }}>- Private Key: 2528 bytes</Text>
                <Text style={styles.text}>
                    This technological choice allows Quantix to sign transactions with mathematical immunity against known quantum attacks.
                </Text>

                <Text style={styles.subheading}>3.2 Proof-of-Stake Consensus (NaivecoinStake)</Text>
                <Text style={styles.text}>
                    Quantix relies on a Proof-of-Stake (PoS) consensus architecture derived from "NaivecoinStake".
                    Unlike energy-intensive Proof-of-Work, this model allows QTX holders to secure the network by "staking" their tokens.
                </Text>
                <Text style={styles.text}>• Validation: Validators are chosen to create new blocks based on their stake.</Text>
                <Text style={styles.text}>• Finality: Fast transaction confirmation.</Text>
                <Text style={styles.text}>• Rewards: Economic incentive for network security via controlled inflation and transaction fees.</Text>
            </View>

            {/* Wallet Architecture */}
            <View style={styles.section}>
                <Text style={styles.heading}>4. Wallet Architecture</Text>
                <Text style={styles.text}>
                    The Quantix Wallet Generator (Quantix Key Forge) illustrates the project's "Security-First" approach.
                </Text>
                <Text style={styles.text}>• Client-Side Generation: Private keys are generated locally in the user's browser, never leaving their device.</Text>
                <Text style={styles.text}>• Address Formats: Native support for standard hexadecimal addresses and optimized formats.</Text>
                <Text style={styles.text}>• Protection: Large private keys (inherent to PQC) are managed via secure JSON files to facilitate backup without compromising user experience.</Text>
            </View>

            {/* Tokenomics */}
            <View style={styles.section}>
                <Text style={styles.heading}>5. Tokenomics</Text>
                <Text style={styles.text}>The native token of the network is Quantix (QTX).</Text>
                <Text style={styles.text}>• Symbol: QTX</Text>
                <Text style={styles.text}>• Usage: Payments, Staking (network security), Governance.</Text>
                <Text style={styles.text}>• Distribution: (Details to be defined upon final deployment - e.g., Decreasing faucet for initial adoption).</Text>
            </View>

            {/* Roadmap */}
            <View style={styles.section} break>
                <Text style={styles.heading}>6. Roadmap</Text>

                <Text style={styles.subheading}>Phase 1: Genesis (Current)</Text>
                <Text style={styles.text}>• Launch of Quantix Key Forge.</Text>
                <Text style={styles.text}>• Deployment of Testnet.</Text>
                <Text style={styles.text}>• Validation of Crystals-Dilithium implementation.</Text>

                <Text style={styles.subheading}>Phase 2: Expansion</Text>
                <Text style={styles.text}>• Mainnet Launch.</Text>
                <Text style={styles.text}>• Integration of public validator nodes.</Text>
                <Text style={styles.text}>• Development of a full block explorer.</Text>

                <Text style={styles.subheading}>Phase 3: Ecosystem</Text>
                <Text style={styles.text}>• Smart Contracts support (future vision).</Text>
                <Text style={styles.text}>• Decentralized governance by QTX holders.</Text>
            </View>

            <Text style={styles.footer} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
            )} fixed />

            <Text style={{ ...styles.footer, bottom: 15, borderTopWidth: 0 }}>
                © 2026 Quantix. Building the quantum-safe future of finance.
            </Text>

        </Page>
    </Document>
);

export default WhitepaperDocument;
