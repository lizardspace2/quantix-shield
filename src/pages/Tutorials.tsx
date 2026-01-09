import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
    ArrowLeft,
    Cloud,
    Server,
    Terminal,
    Shield,
    ExternalLink,
    ChevronRight,
    Database,
    Globe,
    Monitor,
    Cpu,
    Layers,
    Zap
} from 'lucide-react';

const tutorials = [
    {
        id: 'aws',
        title: 'Amazon Web Services',
        icon: <Cloud className="w-5 h-5" />,
        description: 'Deploy on AWS EC2 using the Free Tier.',
        content: (
            <div className="space-y-10 animate-fade-in">
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Layers className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Launch the Instance (EC2)</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed pl-2 border-l border-white/5">
                        <p>1. Log in to the <strong>AWS Console</strong> and search for <strong>EC2</strong>.</p>
                        <p>2. Navigate to <strong>Instances &gt; Launch Instances</strong>.</p>
                        <p>3. <strong>Name</strong>: <code className="bg-primary/10 text-primary px-2 py-0.5 rounded">quantix-node-aws</code></p>
                        <p>4. <strong>OS Images</strong>: Select <strong>Ubuntu</strong> (Choose Ubuntu Server 22.04 LTS or 24.04 LTS).</p>
                        <p>5. <strong>Instance Type</strong>: Select <code className="bg-primary/10 text-primary px-2 py-0.5 rounded">t2.micro</code> or <code className="bg-primary/10 text-primary px-2 py-0.5 rounded">t3.micro</code> (Free Tier usage eligible).</p>
                        <p>6. <strong>Key Pair</strong>: Create a new key pair named <code className="bg-white/5 px-2 py-0.5 rounded">quantix-key</code>. Download the <code className="bg-white/5 px-2 py-0.5 rounded">.pem</code> file and store it securely.</p>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Configure Firewall (Security Group)</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed pl-2 border-l border-white/5">
                        <p>AWS uses "Security Groups" to manage ports. You must enable the Quantix communication ports:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/20 transition-colors">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]" />
                                    <span className="text-primary font-bold uppercase tracking-wider text-xs">Port 3001 (API)</span>
                                </div>
                                <p className="text-sm">Allows the Blockchain Explorer and your browser to fetch block data.</p>
                            </div>
                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/20 transition-colors">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]" />
                                    <span className="text-primary font-bold uppercase tracking-wider text-xs">Port 6001 (P2P)</span>
                                </div>
                                <p className="text-sm">Enables your node to synchronize with other peers in the Quantix network.</p>
                            </div>
                        </div>
                        <p className="text-sm italic opacity-70">Note: Ensure "Source" is set to <code className="bg-white/5 px-1 rounded">0.0.0.0/0</code> for both rules.</p>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Terminal className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Install & Run</h3>
                    </div>
                    <div className="space-y-4">
                        <p className="text-muted-foreground font-light pl-2 border-l border-white/5">Once connected via SSH, execute the deployment script to install Docker and launch the node:</p>
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity" />
                            <pre className="relative p-6 rounded-2xl bg-[#0a0a0c] border border-white/10 overflow-x-auto text-sm font-mono text-primary/90 leading-relaxed shadow-2xl">
                                {`# 1. Update and install dependencies
sudo apt-get update
sudo apt-get install -y git docker.io docker-compose-plugin

# 2. Clone the core repository
git clone https://github.com/spacemen100/quantixchain.git
cd quantixchain

# 3. Start the node as a background peer
sudo docker compose -f docker-compose-peer.yml up -d --build`}
                            </pre>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Zap className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Verify Status</h3>
                    </div>
                    <div className="space-y-6 pl-2 border-l border-white/5">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                <Monitor className="w-4 h-4 text-primary" />
                                Check Logs
                            </h4>
                            <pre className="text-xs font-mono text-muted-foreground mb-4">
                                sudo docker compose -f docker-compose-peer.yml logs -f
                            </pre>
                            <p className="text-sm text-muted-foreground">Look for <code className="text-primary italic">"connection to peer"</code> or <code className="text-primary italic">"Received new block"</code> to confirm synchronization.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                <Globe className="w-4 h-4 text-primary" />
                                Browser Verification
                            </h4>
                            <p className="text-sm text-muted-foreground">Visit <code className="text-primary">http://YOUR_AWS_IP:3001/blocks</code> in your browser. You should see the latest blocks in JSON format.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    {
        id: 'peer',
        title: 'Google Cloud (Peers)',
        icon: <Globe className="w-5 h-5" />,
        description: 'Setup decentralized Peer nodes on GCP.',
        content: (
            <div className="space-y-10 animate-fade-in">
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                            <Database className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Firewall Configuration</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed pl-2 border-l border-white/5">
                        <p>Go to <strong>VPC Network &gt; Firewall</strong> and click <strong>CREATE FIREWALL RULE</strong>:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Name: <code className="bg-accent/10 text-accent px-2 py-0.5 rounded">allow-quantix-p2p</code></li>
                            <li>Targets: <code className="bg-accent/10 text-accent px-2 py-0.5 rounded">All instances in the network</code></li>
                            <li>Source IPv4 ranges: <code className="bg-accent/10 text-accent px-2 py-0.5 rounded">0.0.0.0/0</code></li>
                            <li>Protocols and ports: Select <strong>TCP</strong> and enter <code className="bg-accent/10 text-accent px-2 py-0.5 rounded">3001, 6001</code></li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                            <Server className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">VM Instance Setup</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed pl-2 border-l border-white/5">
                        <p>1. Go to <strong>Compute Engine &gt; VM instances</strong> and click <strong>CREATE INSTANCE</strong>.</p>
                        <p>2. <strong>Machine type</strong>: Select <code className="bg-accent/10 text-accent px-2 py-0.5 rounded">e2-micro</code> (Free tier eligible).</p>
                        <p>3. <strong>Boot disk</strong>: Select <strong>Ubuntu 22.04 LTS</strong>.</p>
                        <p>4. <strong>Firewall</strong>: Check "Allow HTTP traffic" and "Allow HTTPS traffic".</p>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                            <Terminal className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Deploying</h3>
                    </div>
                    <div className="space-y-4">
                        <pre className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10 overflow-x-auto text-sm font-mono text-accent/90 leading-relaxed shadow-2xl">
                            {`# 1. Install Docker & Tools
sudo apt-get update && sudo apt-get install -y git docker.io docker-compose-plugin

# 2. Clone & Launch Node
git clone https://github.com/spacemen100/quantixchain.git
cd quantixchain
sudo docker compose -f docker-compose-peer.yml up -d --build`}
                        </pre>
                    </div>
                </section>
            </div>
        )
    },
    {
        id: 'azure',
        title: 'Microsoft Azure',
        icon: <Monitor className="w-5 h-5" />,
        description: 'Deploy on Azure using Standard_B1s.',
        content: (
            <div className="space-y-10 animate-fade-in">
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                            <Layers className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Azure VM Selection</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed pl-2 border-l border-white/5">
                        <p>1. Search for <strong>Virtual Machines</strong> and click <strong>Create</strong>.</p>
                        <p>2. Resource Group: Create one (e.g., <code className="bg-blue-400/10 text-blue-400 px-2 py-0.5 rounded">QuantixGroup</code>).</p>
                        <p>3. Image: <strong>Ubuntu Server 22.04 LTS</strong>.</p>
                        <p>4. Size: Select <code className="bg-blue-400/10 text-blue-400 px-2 py-0.5 rounded">Standard_B1s</code> (Eligible for free services).</p>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                            <Shield className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Networking (Inbound Rules)</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed pl-2 border-l border-white/5">
                        <p>In the <strong>Networking</strong> tab, create Inbound rules for ports <strong>3001</strong> and <strong>6001</strong>:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Destination port ranges: <code className="bg-blue-400/10 text-blue-400 px-2 py-0.5 rounded">3001, 6001</code></li>
                            <li>Protocol: <code className="bg-blue-400/10 text-blue-400 px-2 py-0.5 rounded">TCP</code></li>
                            <li>Action: <code className="bg-blue-400/10 text-blue-400 px-2 py-0.5 rounded">Allow</code></li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                            <Terminal className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Installation</h3>
                    </div>
                    <pre className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10 overflow-x-auto text-sm font-mono text-blue-400/90 leading-relaxed shadow-2xl">
                        {`# Connect via SSH: ssh azureuser@YOUR_IP
sudo apt-get update && sudo apt-get install -y git docker.io docker-compose-plugin
git clone https://github.com/spacemen100/quantixchain.git
cd quantixchain
sudo docker compose -f docker-compose-peer.yml up -d --build`}
                    </pre>
                </section>
            </div>
        )
    },
    {
        id: 'digitalocean',
        title: 'DigitalOcean',
        icon: <Monitor className="w-5 h-5" />,
        description: 'Fast deployment on DO Droplets.',
        content: (
            <div className="space-y-10 animate-fade-in">
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
                            <Server className="w-6 h-6 text-teal-400" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Create the Droplet</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed pl-2 border-l border-white/5">
                        <p>1. Click <strong>Create &gt; Droplets</strong>.</p>
                        <p>2. Choose <strong>Ubuntu 22.04 LTS</strong>.</p>
                        <p>3. Plan: <strong>Basic / Regular</strong> ($6/mo or $4/mo).</p>
                        <p>4. Authentication: Select your SSH Key.</p>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
                            <Shield className="w-6 h-6 text-teal-400" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">UFW Firewall setup</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed pl-2 border-l border-white/5">
                        <p>After connecting via SSH, run these commands immediately:</p>
                        <pre className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10 overflow-x-auto text-sm font-mono text-teal-400/90 leading-relaxed">
                            {`ufw allow 22/tcp
ufw allow 3001/tcp
ufw allow 6001/tcp
ufw enable`}
                        </pre>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
                            <Terminal className="w-6 h-6 text-teal-400" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Deploy Node</h3>
                    </div>
                    <pre className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10 overflow-x-auto text-sm font-mono text-teal-400/90 leading-relaxed shadow-2xl">
                        {`git clone https://github.com/spacemen100/quantixchain.git
cd quantixchain
docker compose -f docker-compose-peer.yml up -d --build`}
                    </pre>
                </section>
            </div>
        )
    },
    {
        id: 'ssl',
        title: 'SSL/HTTPS Setup',
        icon: <Shield className="w-5 h-5" />,
        description: 'Secure your node with Nginx and Let\'s Encrypt.',
        content: (
            <div className="space-y-10 animate-fade-in">
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                            <Globe className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Reverse Proxy Setup</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed pl-2 border-l border-white/5">
                        <p>1. Install **Nginx** and **Certbot**:</p>
                        <pre className="p-4 rounded-xl bg-[#0a0a0c] text-xs font-mono text-purple-300">
                            sudo apt update && sudo apt install -y nginx certbot python3-certbot-nginx
                        </pre>
                        <p>2. Create a virtual host configuration for your domain:</p>
                        <pre className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10 overflow-x-auto text-sm font-mono text-purple-400/90 leading-relaxed shadow-2xl">
                            {`server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
    }
}`}
                        </pre>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                            <Shield className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Enable SSL Certificate</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed pl-2 border-l border-white/5">
                        <p>Acquire a free certificate from **Let's Encrypt**:</p>
                        <pre className="p-4 rounded-xl bg-[#0a0a0c] text-xs font-mono text-purple-300">
                            sudo certbot --nginx -d yourdomain.com
                        </pre>
                        <p>Choose the option to <strong>Redirect</strong> all traffic to HTTPS to ensure maximum security.</p>
                    </div>
                </section>
            </div>
        )
    },
    {
        id: 'staking',
        title: 'Staking Guide',
        icon: <Zap className="w-5 h-5" />,
        description: 'Earn QTX rewards by securing the network.',
        content: (
            <div className="space-y-10 animate-fade-in">
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                            <Zap className="w-6 h-6 text-yellow-400" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Proof of Stake Economy</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed pl-2 border-l border-white/5">
                        <p>Quantix rewards users for securing the network. Holding QTX in an online node allows you to "mint" new blocks.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                                <span className="text-yellow-400 font-bold block mb-1">Block Reward</span>
                                <span className="text-2xl font-display font-bold text-white tracking-tighter">50 QTX</span>
                                <p className="text-xs mt-2 opacity-60">Halves every 100,000 blocks</p>
                            </div>
                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                                <span className="text-yellow-400 font-bold block mb-1">Fee Collection</span>
                                <span className="text-2xl font-display font-bold text-white tracking-tighter">100%</span>
                                <p className="text-xs mt-2 opacity-60">You keep all transaction fees</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                            <Terminal className="w-6 h-6 text-yellow-400" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">How to Start Staking</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed pl-2 border-l border-white/5">
                        <p>1. **Deploy a Node**: Use any cloud provider deployment guide.</p>
                        <p>2. **Fund the Node**: Transfer any amount of QTX to your node's public address.</p>
                        <p>3. **Automatic Staking**: As soon as your balance is &gt; 0 and the node is online, it will automatically participate in the block minting lottery.</p>
                        <p className="p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-xl text-sm text-yellow-200/80">
                            <strong>Note:</strong> Staking is completely passive. You do not need to "lock" your tokens; they remain available in your wallet at all times.
                        </p>
                    </div>
                </section>
            </div>
        )
    },
    {
        id: 'oracle',
        title: 'Oracle Cloud',
        icon: <Cpu className="w-5 h-5" />,
        description: 'Always Free Tier (OCI) configuration.',
        content: (
            <div className="space-y-10 animate-fade-in">
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                            <Shield className="w-6 h-6 text-orange-400" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Cloud Firewall (Security List)</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed pl-2 border-l border-white/5">
                        <p>Oracle Cloud requires opening ports in the **VCN Security List**:</p>
                        <p>1. Go to your Instance details and click on the **Subnet**.</p>
                        <p>2. Click on the **Default Security List**.</p>
                        <p>3. Add **Ingress Rules**:
                            <br />- Source CIDR: <code className="bg-orange-400/10 text-orange-400 px-2 py-0.5 rounded">0.0.0.0/0</code>
                            <br />- Destination Port Range: <code className="bg-orange-400/10 text-orange-400 px-2 py-0.5 rounded">3001, 6001</code>
                        </p>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                            <Terminal className="w-6 h-6 text-orange-400" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Host Firewall (CRITICAL)</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed pl-2 border-l border-white/5">
                        <p className="text-orange-400 font-bold">⚠️ Warning: Oracle Ubuntu images block all traffic by default via iptables.</p>
                        <p>Run these commands to permit traffic inside the VM:</p>
                        <pre className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10 overflow-x-auto text-sm font-mono text-orange-400/90 leading-relaxed shadow-2xl">
                            {`# Open Port 3001 (API)
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 3001 -j ACCEPT

# Open Port 6001 (P2P)
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 6001 -j ACCEPT

# Save changes
sudo apt install -y iptables-persistent
sudo netfilter-persistent save`}
                        </pre>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                            <Terminal className="w-6 h-6 text-orange-400" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Installation</h3>
                    </div>
                    <pre className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10 overflow-x-auto text-sm font-mono text-orange-400/90 leading-relaxed shadow-2xl">
                        {`# Standard Docker install and git clone
sudo apt-get update && sudo apt-get install -y git docker.io docker-compose-plugin
git clone https://github.com/spacemen100/quantixchain.git
cd quantixchain
sudo docker compose -f docker-compose-peer.yml up -d --build`}
                    </pre>
                </section>
            </div>
        )
    }
];

const Tutorials = () => {
    const [activeTab, setActiveTab] = useState('aws');
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            <div className="noise-overlay" />
            <Navigation />

            <main className="relative pt-32 pb-24">
                {/* Header Section */}
                <div className="container mx-auto px-6 mb-16">
                    <div className="max-w-4xl">
                        <Link to="/">
                            <Button variant="ghost" size="sm" className="gap-2 mb-8 hover:bg-white/5 group">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back to Dashboard
                            </Button>
                        </Link>
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Deployment <span className="text-gradient">Tutorials</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                            Step-by-step guides to help you deploy and run Quantix nodes across various cloud infrastructures.
                            Follow these instructions to join the decentralized network.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-[350px_1fr] gap-12">
                        {/* Sidebar Navigation */}
                        <aside className="space-y-4">
                            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6 block">Platforms</span>
                            <nav className="space-y-3">
                                {tutorials.map((tutorial) => (
                                    <button
                                        key={tutorial.id}
                                        onClick={() => setActiveTab(tutorial.id)}
                                        className={`w-full p-5 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 group border ${activeTab === tutorial.id
                                            ? 'bg-primary/10 border-primary/30 text-white shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)]'
                                            : 'bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10 hover:border-white/20'
                                            }`}
                                    >
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${activeTab === tutorial.id ? 'bg-primary/20 text-primary' : 'bg-white/5'
                                            }`}>
                                            {tutorial.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sm tracking-wide">{tutorial.title}</h3>
                                            <p className="text-[10px] font-medium opacity-60 uppercase tracking-widest mt-0.5">{tutorial.id}</p>
                                        </div>
                                        <ChevronRight className={`ml-auto w-4 h-4 transition-transform ${activeTab === tutorial.id ? 'translate-x-1 opacity-100' : 'opacity-0'
                                            }`} />
                                    </button>
                                ))}
                            </nav>

                            {/* Quick Info Card */}
                            <div className="mt-12 p-8 rounded-3xl glass-card relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Shield className="w-20 h-20 text-primary" />
                                </div>
                                <h4 className="font-bold mb-3 flex items-center gap-2 text-primary">
                                    <Terminal className="w-4 h-4" />
                                    Need Help?
                                </h4>
                                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                                    Join our developer community on GitHub to report issues or ask for configuration support.
                                </p>
                                <a
                                    href="https://github.com/spacemen100/quantixchain"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-primary transition-colors uppercase tracking-[0.1em]"
                                >
                                    View on GitHub
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </aside>

                        {/* Content Area */}
                        <div className="p-8 md:p-12 rounded-[2.5rem] glass-card relative min-h-[600px] border-primary/10">
                            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                <Layers className="w-64 h-64 text-primary" />
                            </div>

                            <div className="relative z-10 animate-fade-in" key={activeTab}>
                                {tutorials.find(t => t.id === activeTab)?.content}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Tutorials;
