# Quantix (QTX) Whitepaper Version 1.0

## Abstract
Quantix (QTX) is a next-generation blockchain designed to withstand the emerging threats of quantum computing. Leveraging the Crystals-Dilithium post-quantum signature algorithm and an energy-efficient Proof-of-Stake consensus mechanism, Quantix provides long-term security for decentralized finance, ensuring user assets remain secure even in the post-quantum era.

## Introduction
Modern cryptography largely relies on the mathematical difficulty of integer factorization (RSA) or the discrete logarithm problem on elliptic curves (ECDSA). However, the advent of quantum computers and Shor's algorithm threatens to break these foundations, rendering almost all current cryptocurrencies (Bitcoin, Ethereum, etc.) vulnerable.
Quantix was created to address this existential threat. By natively integrating post-quantum cryptography (PQC) into the core of the protocol, Quantix guarantees transaction integrity and fund ownership against adversaries equipped with quantum computing power.

## Vision
Our vision is to build a perdurable digital financial infrastructure.
*   **Absolute Security:** Protection against both classical and quantum attacks.
*   **Sustainability:** A Proof-of-Stake (PoS) consensus with a low carbon footprint.
*   **Accessibility:** Simple tools for mass adoption (Instant Wallet Generator, clear interfaces).

## 3. Technology
### 3.1 Post-Quantum Cryptography
Quantix uses Crystals-Dilithium, a digital signature algorithm selected by NIST (National Institute of Standards and Technology) for post-quantum cryptography standardization.

*   **Security Level:** Dilithium2 (equivalent to ~128 bits of quantum security).
*   **Performance:** Fast signature verification and optimized key sizes for blockchain.
*   **Keys:**
    *   Public Key: 1312 bytes
    *   Private Key: 2528 bytes

This technological choice allows Quantix to sign transactions with mathematical immunity against known quantum attacks.

### 3.2 Proof-of-Stake Consensus (NaivecoinStake)
Quantix relies on a Proof-of-Stake (PoS) consensus architecture derived from "NaivecoinStake". Unlike energy-intensive Proof-of-Work, this model allows QTX holders to secure the network by "staking" their tokens.

*   **Validation:** Validators are chosen to create new blocks based on their stake.
*   **Finality:** Fast transaction confirmation.
*   **Rewards:** Economic incentive for network security via controlled inflation and transaction fees.

## 4. Wallet Architecture
The Quantix Wallet Generator (Quantix Key Forge) illustrates the project's "Security-First" approach.

*   **Client-Side Generation:** Private keys are generated locally in the user's browser, never leaving their device.
*   **Address Formats:** Native support for standard hexadecimal addresses and optimized formats.
*   **Protection:** Large private keys (inherent to PQC) are managed via secure JSON files to facilitate backup without compromising user experience.

## 5. Tokenomics
The native token of the network is Quantix (QTX).

*   **Symbol:** QTX
*   **Usage:** Payments, Staking (network security), Governance.
*   **Distribution:** (Details to be defined upon final deployment - e.g., Decreasing faucet for initial adoption).

## 6. Roadmap
*   **Phase 1: Genesis (Current)**
    *   Launch of Quantix Key Forge.
    *   Deployment of Testnet.
    *   Validation of Crystals-Dilithium implementation.
*   **Phase 2: Expansion**
    *   Mainnet Launch.
    *   Integration of public validator nodes.
    *   Development of a full block explorer.
*   **Phase 3: Ecosystem**
    *   Smart Contracts support (future vision).
    *   Decentralized governance by QTX holders.

---
*This document is a technical and conceptual presentation of the Quantix project. Specifications may evolve with development.*
