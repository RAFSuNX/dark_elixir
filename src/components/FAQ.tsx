import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is Dark Elixir?",
    answer: "Dark Elixir is a custom ROM project that aims to provide a perfect balance between stock Android experience and useful customizations."
  },
  {
    question: "How do I install Dark Elixir?",
    answer: "Installation requires an unlocked bootloader and custom recovery. Please refer to your device's specific installation guide in our Telegram group."
  },
  {
    question: "Is Dark Elixir safe to use?",
    answer: "Yes, Dark Elixir is safe to use. We follow strict security practices and regularly update our ROM with the latest security patches."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-neutral-800 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 flex items-center justify-between text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-accent-500" />
              ) : (
                <Plus className="w-5 h-5 text-accent-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 border-t border-neutral-800">
                <p className="text-neutral-400">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}