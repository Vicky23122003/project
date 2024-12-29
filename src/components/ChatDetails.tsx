import React from 'react';
import { Image, FileText, Link as LinkIcon } from 'lucide-react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg font-semibold text-gray-200 mb-4">{children}</h2>
);

export default function ChatDetails() {
  return (
    <div className="w-72 bg-gray-800 h-screen overflow-y-auto p-4 text-gray-300">
      <div className="space-y-8">
        <section>
          <SectionTitle>
            <div className="flex items-center gap-2">
              <Image className="w-5 h-5" />
              Photos and Videos
            </div>
          </SectionTitle>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gray-700 rounded-lg" />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Shared Files
            </div>
          </SectionTitle>
          <div className="space-y-3">
            {['Contract for the provision.pdf', 'Meeting notes.docx'].map((file) => (
              <div key={file} className="flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4 text-gray-400" />
                <span className="truncate">{file}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>
            <div className="flex items-center gap-2">
              <LinkIcon className="w-5 h-5" />
              Shared Links
            </div>
          </SectionTitle>
          <div className="space-y-3">
            {['Economic Policy', 'Q4 Results'].map((link) => (
              <a
                key={link}
                href="#"
                className="block text-sm text-blue-400 hover:underline"
              >
                {link}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}