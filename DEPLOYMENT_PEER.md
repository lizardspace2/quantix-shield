# Deployment Guide: Peer Nodes

This guide is designed to be as **simple as possible**. It explains how to deploy additional nodes ("Peers") to Decentralize the Quantix network.

**Goal**: Create a "Node 2" that connects to "Node 1".

---

## 1. Prerequisites

*   A **Google Cloud Platform (GCP)** account.
*   (Optional but recommended) A domain name if you want SSL later, but for now we will use IP addresses.

---

## 2. Setup Firewall Rules (Do this ONCE)

Before creating the VM, you must allow traffic on the Quantix ports so nodes can talk to each other.

1.  In GCP Console, search for **VPC network**.
2.  Go to **Firewall**.
3.  Click **CREATE FIREWALL RULE**.
4.  **Name**: `allow-quantix-p2p`
5.  **Targets**: `All instances in the network`
6.  **Source IPv4 ranges**: `0.0.0.0/0` (Allows access from anywhere)
7.  **Protocols and ports**:
    *   Check **TCP** and enter: `3001, 6001`
8.  Click **CREATE**.

> **Why?**
> *   **Port 6001**: Used for P2P communication (nodes talking to nodes).
> *   **Port 3001**: Used for the API (checking blocks in your browser).

---

## 3. Create the Virtual Machine (VM)

1.  Go to **Compute Engine** > **VM instances**.
2.  Click **CREATE INSTANCE**.

### Configuration Steps:
*   **Name**: `quantix-node-2`
*   **Region**: Any region (e.g., `us-central1`).
*   **Machine type**: `e2-micro` (2 vCPU, 1 GB memory) - *Cheap/Free tier eligible*.
*   **Boot disk**:
    *   Operating System: **Ubuntu**
    *   Version: **Ubuntu 22.04 LTS (x86/64)**
    *   Size: **30 GB**
*   **Firewall**:
    *   Check [x] **Allow HTTP traffic**
    *   Check [x] **Allow HTTPS traffic**

*(Optional) Fixed IP*: In "Advanced options" > "Networking" > "Network interfaces", you can reserve a Static External IP to keep the same IP address forever.

3.  Click **CREATE**.

---

## 4. Install & Run (The Easy Way)

1.  **SSH** into your new VM (click the "SSH" button next to `quantix-node-2` in the list).
2.  **Copy and paste** this ENTIRE block of commands into the terminal and hit Enter:

```bash
# 1. Install Docker and System Tools
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg lsb-release git nano
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 2. Download the Project
git clone https://github.com/lizardspace2/Quantix-Core.git
cd Quantix-Core

# 3. Start the Node
# We use docker-compose-peer.yml which is pre-configured for peers
sudo docker compose -f docker-compose-peer.yml up -d --build
```

---

## 5. Verification: Is it working?

### Method A: Check Logs
Run this command in the SSH terminal:
```bash
sudo docker compose -f docker-compose-peer.yml logs -f
```
**Success**: You should see lines saying `connection to peer` or `Received new block`.
*(Press `Ctrl + C` to exit logs)*

### Method B: Check via Browser
Open your browser and type:
`http://YOUR_NODE_IP:3001/blocks`

(Replace `YOUR_NODE_IP` with the External IP of `quantix-node-2`)

**Success**: You should see a list of blocks JSON. It should match the latest blocks from Node 1.

---

## 6. Troubleshooting

**"I can't access port 3001 in the browser!"**
*   Did you create the **Firewall Rule** in Step 2?
*   Did you apply it to "All instances" or verify the VM has the right tag?
*   Is the node running? (`sudo docker ps` should show it).

**"The node isn't syncing!"**
*   Wait 1-2 minutes.
*   Check if Node 1 (the Bootnode) is online.
*   Check logs for errors (`Error: Connection refused`).
