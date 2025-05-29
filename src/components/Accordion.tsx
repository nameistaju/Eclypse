import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left hover:opacity-80 transition-opacity"
      >
        <span className="text-lg font-medium text-white">{title}</span>
        <ArrowDown 
          className={`w-5 h-5 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-300 leading-relaxed">{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const accordionData = [
    {
      title: "Size & Fit",
      content: "Model is 5'8\" and wearing size M. Oversized fit with structured shoulders. This piece is designed to be worn loose and comfortable while maintaining an elegant silhouette."
    },
    {
      title: "Delivery & Returns",
      content: "Free delivery on orders above ₹5,000. Standard delivery takes 3-5 business days. We offer a 30-day return policy for all items in original condition with tags attached."
    },
    {
      title: "How This Was Made",
      content: "Ethically sourced premium wool blend, crafted by skilled artisans in our certified facilities. Each piece is carefully constructed using traditional tailoring techniques combined with modern design sensibilities."
    }
  ];

  return (
    <div className="bg-black text-white py-16 px-10">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Accordion;
