import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
    {
        question: "What makes Quantix quantum-resistant?",
        answer: "Quantix uses Crystals-Dilithium, a digital signature algorithm selected by NIST for its resistance to quantum computing attacks that would otherwise break traditional encryption like RSA or ECC."
    },
    {
        question: "How does the Proof-of-Stake consensus work?",
        answer: "Our energy-efficient PoS model allows users to secure the network by staking QTX tokens. This approach consumes 99% less energy than Proof-of-Work while maintaining high security and decentralization."
    },
    {
        question: "Where can I store my QTX tokens?",
        answer: "You can use the official Quantix Wallet, which supports client-side key generation and secure JSON file backups, ensuring your private keys never leave your machine."
    },
    {
        question: "Is Quantix already live?",
        answer: "We are currently in Phase 1 (Genesis), focusing on the testnet deployment and validation of our quantum-resistant implementation before the upcoming Mainnet launch."
    },
    {
        question: "Is Quantix open source?",
        answer: "Yes, Quantix is committed to transparency. Our core blockchain code and development tools are open source and available on GitHub for community review and contribution."
    }
];

const FAQSection = () => {
    return (
        <section id="faq" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">Common Questions</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-none glass-card rounded-2xl px-6 transition-all duration-300 hover:border-primary/20">
                                <AccordionTrigger className="text-left text-lg md:text-xl font-bold py-6 hover:text-primary transition-all leading-snug no-underline hover:no-underline group">
                                    <span className="flex-1">{faq.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base md:text-lg font-light leading-relaxed pb-8">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>

            {/* JSON-LD for SEO */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })}
            </script>
        </section>
    );
};

export default FAQSection;
