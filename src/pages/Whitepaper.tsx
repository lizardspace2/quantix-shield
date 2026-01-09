import { PDFViewer } from '@react-pdf/renderer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import WhitepaperDocument from '../documents/WhitepaperDocument';

const Whitepaper = () => {
    return (
        <div className="h-screen bg-background flex flex-col overflow-hidden">
            <Navigation />

            <div className="flex-1 flex flex-col pt-16 md:pt-20">
                <div className="container mx-auto px-4 py-3 md:py-4 flex-none">
                    <Link to="/">
                        <Button variant="ghost" size="sm" className="gap-2 text-sm">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>

                <div className="flex-1 w-full bg-muted/20 relative">
                    <div className="absolute inset-0 overflow-auto">
                        <PDFViewer width="100%" height="100%" className="w-full h-full border-none min-h-[500px]">
                            <WhitepaperDocument />
                        </PDFViewer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whitepaper;
