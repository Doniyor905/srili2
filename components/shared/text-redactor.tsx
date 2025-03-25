'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Bold, Italic } from 'lucide-react';
import clsx from 'clsx';

export function TextRedactor({
  value,
  onChange,
}: {
  value?: string;
  onChange: (v: string) => void;
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <div className="border rounded bg-white">
      {/* Toolbar */}
      <div className="flex gap-2 p-2 border-b">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={clsx('p-1', { 'bg-primary text-white': editor.isActive('bold') })}>
          <Bold size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={clsx('p-1', { 'bg-primary text-white': editor.isActive('italic') })}>
          <Italic size={16} />
        </button>
      </div>

      {/* Editor content */}
      <EditorContent editor={editor} className="p-3 min-h-[200px]" />
    </div>
  );
}
