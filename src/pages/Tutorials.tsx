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
    Layers
} from 'lucide-react';

const tutorials = [
    {
        id: 'aws',
        title: 'Amazon Web Services',
        icon: <Cloud className="w-5 h-5" />,
        description: 'Deploy on AWS EC2 using the Free Tier.',
        content: (
            <div className="space-y-8">
                <section>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Layers className="w-6 h-6 text-primary" />
                        Launch the Instance (EC2)
                    </h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>1. Log in to the <strong>AWS Console</strong>.</p>
                        <p>2. Navigate to <strong>EC2 &gt; Instances &gt; Launch Instances</strong>.</p>
                        <p>3. <strong>Name</strong>: <code className="bg-primary/10 text-primary px-2 py-0.5 rounded">quantix-node-aws</code></p>
                        <p>4. <strong>OS Images</strong>: Select <strong>Ubuntu</strong> (22.04 LTS or 24.04 LTS).</p>
                        <p>5. <strong>Instance Type</strong>: Select <code className="bg-primary/10 text-primary px-2 py-0.5 rounded">t2.micro</code> or <code className="bg-primary/10 text-primary px-2 py-0.5 rounded">t3.micro</code> (Free Tier).</p>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Shield className="w-6 h-6 text-primary" />
                        Configure Firewall
                    </h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>Under <strong>Security Groups</strong>, add the following Inbound Rules:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <span className="text-primary font-bold block mb-1">Port 3001</span>
                                <span className="text-sm">Quantix API (Explorer/Blocks)</span>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <span className="text-primary font-bold block mb-1">Port 6001</span>
                                <span className="text-sm">P2P Network Communication</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Terminal className="w-6 h-6 text-primary" />
                        Install & Run
                    </h3>
                    <p className="text-muted-foreground mb-4 font-light">Connect via SSH and run the following command to deploy the node automatically:</p>
                    <pre className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10 overflow-x-auto text-sm font-mono text-primary/90 leading-relaxed shadow-2xl">
                        {`# Install Docker & Tools
sudo apt-get update && sudo apt-get install -y git docker.io docker-compose

# Clone & Launch Node
git clone https://github.com/spacemen100/quantixchain.git
cd quantixchain
sudo docker compose -f docker-compose-peer.yml up -d --build`}
                    </pre>
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
            <div className="space-y-8">
                <section>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Database className="w-6 h-6 text-accent" />
                        Firewall Rules (GCP)
                    </h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>Go to <strong>VPC Network &gt; Firewall</strong> and create a rule:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Name: <code className="bg-accent/10 text-accent px-2 py-0.5 rounded">allow-quantix-p2p</code></li>
                            <li>Source: <code className="bg-accent/10 text-accent px-2 py-0.5 rounded">0.0.0.0/0</code></li>
                            <li>Ports: <code className="bg-accent/10 text-accent px-2 py-0.5 rounded">TCP 3001, 6001</code></li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Server className="w-6 h-6 text-accent" />
                        VM Instance
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Create an <code className="bg-accent/10 text-accent px-2 py-0.5 rounded">e2-micro</code> instance with <strong>Ubuntu 22.04 LTS</strong>.
                        Ensure "Allow HTTP/HTTPS traffic" is checked.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Terminal className="w-6 h-6 text-accent" />
                        One-Command Deploy
                    </h3>
                    <pre className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10 overflow-x-auto text-sm font-mono text-accent/90 leading-relaxed shadow-2xl">
                        {`# Automatic deployment script
sudo apt-get update && sudo apt-get install -y git docker.io
git clone https://github.com/spacemen100/quantixchain.git
cd quantixchain
sudo docker compose -f docker-compose-peer.yml up -d --build`}
                    </pre>
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
            <div className="space-y-8">
                <section>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Layers className="w-6 h-6 text-blue-400" />
                        Azure VM Setup
                    </h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>1. Create a <strong>Virtual Machine</strong> in the Azure Portal.</p>
                        <p>2. Size: <code className="bg-blue-400/10 text-blue-400 px-2 py-0.5 rounded">Standard_B1s</code>.</p>
                        <p>3. Image: <strong>Ubuntu Server 22.04 LTS</strong>.</p>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Shield className="w-6 h-6 text-blue-400" />
                        Network Security Group
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Add Inbound rules for ports <strong>3001</strong> and <strong>6001</strong> in your Network Security Group (NSG)
                        to allow external traffic to reach your node.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Terminal className="w-6 h-6 text-blue-400" />
                        Run Node
                    </h3>
                    <pre className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10 overflow-x-auto text-sm font-mono text-blue-400/90 leading-relaxed shadow-2xl">
                        {`git clone https://github.com/spacemen100/quantixchain.git
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
            <div className="space-y-8">
                <section>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Server className="w-6 h-6 text-teal-400" />
                        Create Droplet
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Select <strong>Ubuntu 22.04</strong> and the <strong>$6/mo</strong> Basic Droplet.
                        Choose an SSH key for secure access.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Shield className="w-6 h-6 text-teal-400" />
                        UFW Firewall
                    </h3>
                    <pre className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10 overflow-x-auto text-sm font-mono text-teal-400/90 leading-relaxed">
                        {`ufw allow 22/tcp
ufw allow 3001/tcp
ufw allow 6001/tcp
ufw enable`}
                    </pre>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Terminal className="w-6 h-6 text-teal-400" />
                        Final Step
                    </h3>
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
        id: 'oracle',
        title: 'Oracle Cloud',
        icon: <Cpu className="w-5 h-5" />,
        description: 'Always Free Tier (OCI) configuration.',
        content: (
            <div className="space-y-8">
                <section>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Shield className="w-6 h-6 text-orange-400" />
                        Oracle Networking
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        In OCI, remember to open ports <strong>3001</strong> and <strong>6001</strong> in both the
                        <strong> Cloud VCN Security List</strong> AND the <strong>Internal OS Firewall (iptables)</strong>.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Terminal className="w-6 h-6 text-orange-400" />
                        Host Firewall (Critical)
                    </h3>
                    <pre className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10 overflow-x-auto text-sm font-mono text-orange-400/90 leading-relaxed shadow-2xl">
                        {`sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 3001 -j ACCEPT
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 6001 -j ACCEPT
sudo netfilter-persistent save`}
                    </pre>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Terminal className="w-6 h-6 text-orange-400" />
                        Deploy Node
                    </h3>
                    <pre className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10 overflow-x-auto text-sm font-mono text-orange-400/90 leading-relaxed shadow-2xl">
                        {`git clone https://github.com/spacemen100/quantixchain.git
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
