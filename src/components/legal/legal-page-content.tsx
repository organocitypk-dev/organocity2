import Link from "next/link";
import type { LegalSection } from "./legal-page-layout";

const identityNotice = (
  <p>
    OrganoCity operates from Pakistan. <strong>TODO:</strong> Add the registered legal entity name, registration
    number, registered address, and applicable tax identifiers after they are confirmed.
  </p>
);

export const termsSections: LegalSection[] = [
  { id: "business", title: "About OrganoCity", content: <>{identityNotice}<p>These terms apply to use of this website and to retail, wholesale, private-label, and export orders accepted by OrganoCity.</p></> },
  { id: "orders", title: "Orders and quotations", content: <><p>Website listings and quotations are invitations to place an order. An order becomes binding only after OrganoCity confirms product availability, specifications, quantity, price, payment terms, and delivery arrangements.</p><p>Wholesale, customized, private-label, and export orders may require a separate written quotation or agreement.</p></> },
  { id: "products", title: "Product information", content: <><p>Natural products can vary in color, crystal size, texture, appearance, and other natural characteristics. Images are illustrative, and screens may display colors differently.</p><p>Buyers are responsible for confirming the required grade, intended use, packaging, labeling, and destination requirements before ordering.</p></> },
  { id: "pricing", title: "Prices, taxes, and payment", content: <><p>Prices are shown in the displayed currency unless stated otherwise. Taxes, duties, banking charges, freight, customs costs, and destination charges may be additional where applicable.</p><p>Accepted payment methods and payment timing are confirmed during checkout or in the applicable quotation.</p></> },
  { id: "acceptable-use", title: "Website use and intellectual property", content: <><p>You must not misuse the website, interfere with its operation, attempt unauthorized access, or reproduce OrganoCity branding and content without permission or another lawful basis.</p></> },
  { id: "liability", title: "Responsibility and limitations", content: <><p>Nothing in these terms excludes rights or liabilities that cannot lawfully be excluded. To the extent permitted by applicable law, OrganoCity is not responsible for indirect losses or delays outside its reasonable control.</p></> },
  { id: "law", title: "Applicable terms and updates", content: <><p>Consumer rights and mandatory laws applicable to a transaction remain unaffected. <strong>TODO:</strong> Confirm governing law, jurisdiction, and dispute-resolution wording with qualified legal counsel.</p><p>We may update these terms prospectively by publishing a revised date.</p></> },
];

export const privacySections: LegalSection[] = [
  { id: "information", title: "Information we collect", content: <><p>We may collect contact, account, order, delivery, payment-status, inquiry, wholesale, technical, and communications information you provide or that is generated when using the website.</p><p>Payment providers may process payment credentials directly; OrganoCity should not receive full card details when a third-party processor is used.</p></> },
  { id: "uses", title: "How information is used", content: <><p>Information may be used to respond to inquiries, process orders, coordinate shipping and exports, prevent fraud, provide customer support, maintain records, improve the website, and comply with legal obligations.</p></> },
  { id: "sharing", title: "When information is shared", content: <><p>Relevant information may be shared with service providers such as payment processors, hosting providers, logistics partners, customs agents, professional advisers, and authorities where necessary or legally required.</p><p>OrganoCity does not claim to sell personal information.</p></> },
  { id: "international", title: "International processing", content: <><p>For international orders, information may be processed or transferred across borders to complete payment, logistics, customs, documentation, and customer support.</p></> },
  { id: "retention", title: "Retention and security", content: <><p>Information is retained only as reasonably needed for the purposes described, recordkeeping, disputes, and applicable legal requirements. Reasonable safeguards are used, but no online system can guarantee absolute security.</p><p><strong>TODO:</strong> Publish the approved retention schedule and named privacy contact after confirmation.</p></> },
  { id: "choices", title: "Your choices and requests", content: <><p>You may request access, correction, or deletion where applicable by using the <Link href="/contact">contact page</Link>. Some records may need to be retained for legal, accounting, fraud-prevention, or contractual reasons.</p></> },
  { id: "cookies", title: "Cookies and analytics", content: <><p>The website may use essential storage and, when configured, analytics or advertising technologies. <strong>TODO:</strong> Add a complete cookie list and consent settings after all production integrations are finalized.</p></> },
];

export const disclaimerSections: LegalSection[] = [
  { id: "general", title: "General information", content: <><p>Website content is provided for general product and business information. It is not legal, medical, nutritional, or other professional advice.</p></> },
  { id: "health", title: "Health and wellness information", content: <><p>Statements about salt, Shilajit, herbs, honey, or other natural products must not be treated as diagnosis, treatment, cure, or prevention advice. Consult a qualified professional when health circumstances, medicines, allergies, pregnancy, or dietary restrictions may be relevant.</p></> },
  { id: "natural-variation", title: "Natural variation", content: <><p>Natural materials can differ between batches in color, texture, aroma, size, mineral appearance, and presentation. These variations do not automatically indicate a defect.</p></> },
  { id: "third-parties", title: "Third-party information and links", content: <><p>External links and third-party material are provided for convenience. OrganoCity does not control and cannot guarantee third-party availability, accuracy, security, or practices.</p></> },
  { id: "availability", title: "Accuracy and availability", content: <><p>We aim to keep information accurate, but availability, specifications, images, prices, and regulations can change. Confirm material requirements in writing before a wholesale, private-label, or export commitment.</p></> },
];

export const refundSections: LegalSection[] = [
  { id: "contact", title: "Report a problem", content: <><p>Contact OrganoCity promptly after delivery if an item is damaged, incorrect, incomplete, or materially different from the confirmed order. Include the order reference and clear photos of the item and packaging.</p><p><strong>TODO:</strong> Confirm and publish the exact notification window and return contact address.</p></> },
  { id: "eligibility", title: "Return eligibility", content: <><p>Eligibility depends on the product condition, reason for return, applicable law, and agreed order terms. Products should remain unused, unopened where relevant, and in original packaging unless inspection is necessary to identify a fault.</p></> },
  { id: "exceptions", title: "Products requiring special handling", content: <><p>Food, ingestible, hygiene-sensitive, customized, private-label, made-to-order, and bulk products may not be returnable for change of mind where law permits. This does not remove rights relating to damaged, incorrect, unsafe, or otherwise non-conforming goods.</p></> },
  { id: "approval", title: "Return approval and shipping", content: <><p>Do not send products back until return instructions are confirmed. Responsibility for return transport depends on the reason for return, applicable consumer law, and agreed wholesale or export terms.</p></> },
  { id: "resolution", title: "Refunds, replacement, or credit", content: <><p>After assessment, an eligible claim may be resolved through replacement, repair where appropriate, store credit, partial refund, or refund to the original payment method. Banking and payment-provider processing times are outside OrganoCity&apos;s control.</p><p><strong>TODO:</strong> Confirm the approved refund-processing timeframe.</p></> },
  { id: "b2b", title: "Wholesale and export orders", content: <><p>Wholesale, export, customized, and private-label returns are governed primarily by the accepted quotation, specifications, samples, Incoterms where used, inspection terms, and written agreement.</p></> },
];

export const shippingSections: LegalSection[] = [
  { id: "destinations", title: "Shipping destinations", content: <><p>OrganoCity may arrange delivery within Pakistan and coordinate international shipping where service is available. Availability depends on the product, destination, carrier, customs rules, and order size.</p></> },
  { id: "processing", title: "Order processing", content: <><p>Processing begins after payment and order details are confirmed. Customized packaging, private-label, wholesale, and export orders require additional preparation time.</p><p><strong>TODO:</strong> Publish approved processing estimates for standard and custom orders.</p></> },
  { id: "costs", title: "Shipping costs", content: <><p>Shipping is not assumed to be free. Costs are calculated or quoted using destination, weight, dimensions, service level, and shipment requirements. International buyers may also be responsible for duties, taxes, customs clearance, storage, inspection, and brokerage charges unless agreed otherwise.</p></> },
  { id: "delivery", title: "Delivery estimates and tracking", content: <><p>Any delivery estimate is not a guarantee and may be affected by carriers, weather, customs, public holidays, security conditions, or incomplete buyer information. Tracking is supplied when the selected service provides it.</p><p><strong>TODO:</strong> Add confirmed carriers and service-specific estimates.</p></> },
  { id: "address", title: "Address and receipt", content: <><p>Buyers must provide a complete, accurate, serviceable address and contact details. Inspect packages on arrival where practical and record visible damage with the carrier before acceptance.</p></> },
  { id: "risk", title: "Wholesale and export delivery terms", content: <><p>Risk transfer, title, insurance, freight responsibility, export documents, and Incoterms are determined by the accepted quotation or contract. Buyers should not assume a delivery term that is not confirmed in writing.</p></> },
];
