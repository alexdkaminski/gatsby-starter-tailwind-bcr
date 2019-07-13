import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import profilePhoto from "../images/profile-photo.jpg";

function SuccessPage() {
    return (
        <Layout>
            <SEO
                title="Success"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />


            <p className="mx-auto md:w-1/2">
                Thanks for your message, we will contact you within 30 minutes.
            </p>

        </Layout>
    );
}

export default SuccessPage;
