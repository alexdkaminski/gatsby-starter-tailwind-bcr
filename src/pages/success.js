import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function SuccessPage() {
    return (
        <Layout>
            <SEO
                title="Success"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />

            <section className="pt-12 p-6">
                <div className="text-lg w-full mb-16 max-w-4xl mx-auto">
                    <p>
                        Thanks for your message, we will contact you within 30 minutes.
                    </p>
                    <br/>
                    <p className="font-bold">
                        For urgent help, please call <a className="text-blue-500 underline hover:no-underline" href="tel:0435 619 337">0435 619 337</a>
                    </p>
                </div>
            </section>
           

        </Layout>
    );
}

export default SuccessPage;
