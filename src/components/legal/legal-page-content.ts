import type { LegalPageData } from "./legal-page-layout";

export const legalPageSlugs = ["terms", "privacy", "disclaimer", "refund-policy", "shipping-policy"] as const;
export type LegalPageSlug = (typeof legalPageSlugs)[number];

export const legalPagePaths: Record<LegalPageSlug, string> = {
  terms: "/terms",
  privacy: "/privacy",
  disclaimer: "/disclaimer",
  "refund-policy": "/refund-policy",
  "shipping-policy": "/shipping-policy",
};

export const legalPageDefaults: Record<LegalPageSlug, LegalPageData> = {
  terms: {
    title: "Terms & Conditions",
    description: "Terms governing OrganoCity retail, wholesale, private-label, and export orders for Himalayan salt and natural products.",
    lastUpdated: "July 25, 2026",
    sections: [
      { id: "business", title: "About OrganoCity", body: "OrganoCity operates from Pakistan. TODO: Add the registered legal entity name, registration number, registered address, and applicable tax identifiers after they are confirmed.\n\nThese terms apply to use of this website and to retail, wholesale, private-label, and export orders accepted by OrganoCity." },
      { id: "orders", title: "Orders and quotations", body: "Website listings and quotations are invitations to place an order. An order becomes binding only after OrganoCity confirms product availability, specifications, quantity, price, payment terms, and delivery arrangements.\n\nWholesale, customized, private-label, and export orders may require a separate written quotation or agreement." },
      { id: "products", title: "Product information", body: "Natural products can vary in color, crystal size, texture, appearance, and other natural characteristics. Images are illustrative, and screens may display colors differently.\n\nBuyers are responsible for confirming the required grade, intended use, packaging, labeling, and destination requirements before ordering." },
      { id: "pricing", title: "Prices, taxes, and payment", body: "Prices are shown in the displayed currency unless stated otherwise. Taxes, duties, banking charges, freight, customs costs, and destination charges may be additional where applicable.\n\nAccepted payment methods and payment timing are confirmed during checkout or in the applicable quotation." },
      { id: "acceptable-use", title: "Website use and intellectual property", body: "You must not misuse the website, interfere with its operation, attempt unauthorized access, or reproduce OrganoCity branding and content without permission or another lawful basis." },
      { id: "liability", title: "Responsibility and limitations", body: "Nothing in these terms excludes rights or liabilities that cannot lawfully be excluded. To the extent permitted by applicable law, OrganoCity is not responsible for indirect losses or delays outside its reasonable control." },
      { id: "law", title: "Applicable terms and updates", body: "Consumer rights and mandatory laws applicable to a transaction remain unaffected. TODO: Confirm governing law, jurisdiction, and dispute-resolution wording with qualified legal counsel.\n\nWe may update these terms prospectively by publishing a revised date." },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    description: "How OrganoCity handles information for website visitors, retail customers, wholesale buyers, and international orders.",
    lastUpdated: "July 25, 2026",
    sections: [
      { id: "information", title: "Information we collect", body: "We may collect contact, account, order, delivery, payment-status, inquiry, wholesale, technical, and communications information you provide or that is generated when using the website.\n\nPayment providers may process payment credentials directly; OrganoCity should not receive full card details when a third-party processor is used." },
      { id: "uses", title: "How information is used", body: "Information may be used to respond to inquiries, process orders, coordinate shipping and exports, prevent fraud, provide customer support, maintain records, improve the website, and comply with legal obligations." },
      { id: "sharing", title: "When information is shared", body: "Relevant information may be shared with service providers such as payment processors, hosting providers, logistics partners, customs agents, professional advisers, and authorities where necessary or legally required.\n\nOrganoCity does not claim to sell personal information." },
      { id: "international", title: "International processing", body: "For international orders, information may be processed or transferred across borders to complete payment, logistics, customs, documentation, and customer support." },
      { id: "retention", title: "Retention and security", body: "Information is retained only as reasonably needed for the purposes described, recordkeeping, disputes, and applicable legal requirements. Reasonable safeguards are used, but no online system can guarantee absolute security.\n\nTODO: Publish the approved retention schedule and named privacy contact after confirmation." },
      { id: "choices", title: "Your choices and requests", body: "You may request access, correction, or deletion where applicable by using the contact page. Some records may need to be retained for legal, accounting, fraud-prevention, or contractual reasons." },
      { id: "cookies", title: "Cookies and analytics", body: "The website may use essential storage and, when configured, analytics or advertising technologies. TODO: Add a complete cookie list and consent settings after all production integrations are finalized." },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    description: "Important limitations concerning OrganoCity product information, natural variation, wellness content, and third-party material.",
    lastUpdated: "July 25, 2026",
    sections: [
      { id: "general", title: "General information", body: "Website content is provided for general product and business information. It is not legal, medical, nutritional, or other professional advice." },
      { id: "health", title: "Health and wellness information", body: "Statements about salt, Shilajit, herbs, honey, or other natural products must not be treated as diagnosis, treatment, cure, or prevention advice. Consult a qualified professional when health circumstances, medicines, allergies, pregnancy, or dietary restrictions may be relevant." },
      { id: "natural-variation", title: "Natural variation", body: "Natural materials can differ between batches in color, texture, aroma, size, mineral appearance, and presentation. These variations do not automatically indicate a defect." },
      { id: "third-parties", title: "Third-party information and links", body: "External links and third-party material are provided for convenience. OrganoCity does not control and cannot guarantee third-party availability, accuracy, security, or practices." },
      { id: "availability", title: "Accuracy and availability", body: "We aim to keep information accurate, but availability, specifications, images, prices, and regulations can change. Confirm material requirements in writing before a wholesale, private-label, or export commitment." },
    ],
  },
  "refund-policy": {
    title: "Refund & Return Policy",
    description: "Refund and return guidance for eligible OrganoCity retail, wholesale, customized, and export purchases.",
    lastUpdated: "July 25, 2026",
    sections: [
      { id: "contact", title: "Report a problem", body: "Contact OrganoCity promptly after delivery if an item is damaged, incorrect, incomplete, or materially different from the confirmed order. Include the order reference and clear photos of the item and packaging.\n\nTODO: Confirm and publish the exact notification window and return contact address." },
      { id: "eligibility", title: "Return eligibility", body: "Eligibility depends on the product condition, reason for return, applicable law, and agreed order terms. Products should remain unused, unopened where relevant, and in original packaging unless inspection is necessary to identify a fault." },
      { id: "exceptions", title: "Products requiring special handling", body: "Food, ingestible, hygiene-sensitive, customized, private-label, made-to-order, and bulk products may not be returnable for change of mind where law permits. This does not remove rights relating to damaged, incorrect, unsafe, or otherwise non-conforming goods." },
      { id: "approval", title: "Return approval and shipping", body: "Do not send products back until return instructions are confirmed. Responsibility for return transport depends on the reason for return, applicable consumer law, and agreed wholesale or export terms." },
      { id: "resolution", title: "Refunds, replacement, or credit", body: "After assessment, an eligible claim may be resolved through replacement, repair where appropriate, store credit, partial refund, or refund to the original payment method. Banking and payment-provider processing times are outside OrganoCity's control.\n\nTODO: Confirm the approved refund-processing timeframe." },
      { id: "b2b", title: "Wholesale and export orders", body: "Wholesale, export, customized, and private-label returns are governed primarily by the accepted quotation, specifications, samples, Incoterms where used, inspection terms, and written agreement." },
    ],
  },
  "shipping-policy": {
    title: "Shipping Policy",
    description: "Shipping guidance for OrganoCity domestic, wholesale, private-label, and international export orders.",
    lastUpdated: "July 25, 2026",
    sections: [
      { id: "destinations", title: "Shipping destinations", body: "OrganoCity may arrange delivery within Pakistan and coordinate international shipping where service is available. Availability depends on the product, destination, carrier, customs rules, and order size." },
      { id: "processing", title: "Order processing", body: "Processing begins after payment and order details are confirmed. Customized packaging, private-label, wholesale, and export orders require additional preparation time.\n\nTODO: Publish approved processing estimates for standard and custom orders." },
      { id: "costs", title: "Shipping costs", body: "Shipping is not assumed to be free. Costs are calculated or quoted using destination, weight, dimensions, service level, and shipment requirements. International buyers may also be responsible for duties, taxes, customs clearance, storage, inspection, and brokerage charges unless agreed otherwise." },
      { id: "delivery", title: "Delivery estimates and tracking", body: "Any delivery estimate is not a guarantee and may be affected by carriers, weather, customs, public holidays, security conditions, or incomplete buyer information. Tracking is supplied when the selected service provides it.\n\nTODO: Add confirmed carriers and service-specific estimates." },
      { id: "address", title: "Address and receipt", body: "Buyers must provide a complete, accurate, serviceable address and contact details. Inspect packages on arrival where practical and record visible damage with the carrier before acceptance." },
      { id: "risk", title: "Wholesale and export delivery terms", body: "Risk transfer, title, insurance, freight responsibility, export documents, and Incoterms are determined by the accepted quotation or contract. Buyers should not assume a delivery term that is not confirmed in writing." },
    ],
  },
};
