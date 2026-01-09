# Setup Guide: SSL/HTTPS Security

This guide explains how to secure your Quantix node's API and Explorer using **Nginx** as a reverse proxy and **Certbot** for free SSL certificates.

## 1. Prerequisites

*   A running Quantix node (GCP, AWS, OCI, or DigitalOcean).
*   A **Domain Name** (e.g., `node.yourdomain.com`) pointing to your server's IP.
*   The following ports open in your Cloud Firewall:
    *   **80** (HTTP)
    *   **443** (HTTPS)

---

## 2. Install Nginx and Certbot

SSH into your server and run:

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
```

---

## 3. Configure Nginx as a Reverse Proxy

We will configure Nginx to forward traffic from port 80/443 to the Quantix API (port 3001).

1.  Create a new configuration file (replace `yourdomain.com` with your actual domain):
    ```bash
    sudo nano /etc/nginx/sites-available/quantix
    ```

2.  Paste the following configuration:
    ```nginx
    server {
        listen 80;
        server_name yourdomain.com;

        location / {
            proxy_pass http://localhost:3001;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```

3.  Enable the configuration and restart Nginx:
    ```bash
    sudo ln -s /etc/nginx/sites-available/quantix /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl restart nginx
    ```

---

## 4. Obtain an SSL Certificate

Run Certbot to automatically acquire and install the SSL certificate:

```bash
sudo certbot --nginx -d yourdomain.com
```

*   Follow the prompts (enter email, agree to terms).
*   Select the option to **Redirect** all HTTP traffic to HTTPS (Option 2).

---

## 5. Verification

Open your browser and navigate to:
`https://yourdomain.com/blocks`

**Success**: You should see a green padlock icon and your blockchain data.

---

## 6. Security Note: P2P Port (6001)

The P2P port (6001) uses a custom WebSocket protocol for node-to-node communication. 

*   **API/Explorer**: Should always be behind HTTPS (Nginx).
*   **P2P**: Usually remains on raw TCP/WS on port 6001. If you wish to use Secure WebSockets (WSS) for P2P via Nginx, you would need to add a second `location` block for port 6001 in your Nginx config.

---

## 7. Automatic Renewal

Certbot automatically sets up a renewal task. You can verify it with:
```bash
sudo certbot renew --dry-run
```
If this command succeeds, your certificate will renew automatically every 90 days.
