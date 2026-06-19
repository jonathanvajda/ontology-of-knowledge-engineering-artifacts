function renderMermaidDiagrams(attempt) {
  if (typeof mermaid === "undefined") {
    if (attempt < 10) {
      window.setTimeout(function () {
        renderMermaidDiagrams(attempt + 1);
      }, 100);
    }
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
  document.addEventListener("DOMContentLoaded", function () {
    renderMermaidDiagrams(0);
  });
} else {
  renderMermaidDiagrams(0);
}
