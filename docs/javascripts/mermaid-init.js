function renderMermaidDiagrams() {
  if (typeof mermaid === "undefined") {
    return;
  }

  mermaid.initialize({ startOnLoad: false });

  document.querySelectorAll("pre code.language-mermaid").forEach(function (block, index) {
    if (block.dataset.mermaidRendered === "true") {
      return;
    }

    var source = block.textContent;
    var container = document.createElement("div");
    container.className = "mermaid";
    container.id = "mermaid-diagram-" + index;
    container.textContent = source;
    block.dataset.mermaidRendered = "true";
    block.parentElement.replaceWith(container);
  });

  mermaid.run();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderMermaidDiagrams);
} else {
  renderMermaidDiagrams();
}
