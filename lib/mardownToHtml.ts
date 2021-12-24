import {marked} from "marked";

export default async function markdownToHtml(markdown: string) {
  marked.setOptions({
    gfm: true,
    renderer: new marked.Renderer(),
    highlight: (code, lang) => {
      const hljs = require('highlight.js');
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  });
  return marked.parse(markdown);
};