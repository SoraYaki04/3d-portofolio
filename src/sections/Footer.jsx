const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
                <div className="flex gap-3">
                    <div className="social-icon">
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 cursor-pointer"  onClick={() => window.open('https://github.com/SoraYaki04', '_blank')} />
                    </div>
                    <div className="social-icon">
                        <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2 cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/cahya-langit-atmawinata-496347383/', '_blank')} />
                    </div>
                    <div className="social-icon">
                        <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2 cursor-pointer" onClick={() => window.open('https://www.instagram.com/chyazk04/', '_blank')} /> 
                    </div>
                </div>

            <p className="text-white-500">
                © 2025 Langit, All rights reserved.
            </p>
        </section>
    );
};

export default Footer;