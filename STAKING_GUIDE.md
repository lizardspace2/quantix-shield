# Staking Guide: Earning Rewards with Quantix (QTX)

Quantix is a **Proof of Stake (PoS)** blockchain. Instead of using energy-hungry mining hardware, the network is secured by users who "stake" their coins. In return for securing the network, stakers earn rewards.

---

## 1. What is Staking?

Staking is the process of keeping your node online and connected to the network with a positive balance of QTX. The network "selects" a node to create the next block based on how many coins it holds.

**The Golden Rule**: The more QTX you have, the higher your chances of being selected to "mint" (create) a block and earn rewards.

---

## 2. Rewards

When your node successfully mints a block, you receive:

1.  **Block Reward**: **50 QTX** is automatically "minted" and sent to your address.
    *   *Note: This reward halves every 100,000 blocks.*
2.  **Transaction Fees**: You collect all the fees from the transactions included in your block.

---

## 3. How it Works (The "Lottery")

Think of staking like a lottery where:
*   **Balance** = Your number of tickets.
*   **Difficulty** = The target you need to hit.
*   **Staking Hash** = A random draw that happens every second.

Every 5 minutes (300 seconds), a new block is expected. Your node constantly checks if its current "Staking Hash" is lower than its "Target" (which is boosted by your balance). If it is, you've won the right to mint that block!

---

## 4. Requirements for Staking

To start earning rewards, you need:

1.  **A Node running 24/7**: Since the lottery happens every second, your node must be online to participate. (See our [Deployment Guides](./README.md#deployment)).
2.  **A Wallet with QTX**: You cannot mint blocks with a balance of 0.
3.  **Connectivity**: Your node must be connected to other peers.

---

## 5. Step-by-Step Guide

### Step 1: Deploy your Node
Follow one of our deployment guides to set up your node on the cloud (Google Cloud, AWS, Oracle, etc.).

### Step 2: Get your Public Address
In your node's terminal, run:
```bash
curl http://localhost:3001/address
```
Copy your public key. You will need this to receive coins.

### Step 3: Fund your Wallet
Receive QTX from another user or from a faucet. Staking starts **automatically** as soon as your balance is greater than 0.

### Step 4: Verify your Node is Staking
Watch your node's logs to see the staking process in action:
```bash
sudo docker compose -f docker-compose-peer.yml logs -f
```
Look for:
*   `Received new block`: Your node is synced and watching others.
*   `connection to peer`: Your node is part of the network.

When you successfully mint a block, you will see a message like `Mined a new block: [hash]`.

---

## 6. Pro-Tips for Stakers

*   **Uptime is King**: If your node is offline, you have 0% chance of earning rewards. Use a reliable cloud provider.
*   **Re-invest Rewards**: Since probability is based on balance, reinvesting your earned rewards (compounding) increases your future earnings.
*   **Security**: Never share your `private_key` file. This file is what allows you to stake and spend your rewards.
