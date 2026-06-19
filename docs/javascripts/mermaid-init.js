document.addEventListener("DOMContentLoaded", function () {
  if (typeof mermaid === "undefined") {
    return;
  }

  mermaid.initialize({ startOnLoad: false });

  document.querySelectorAll("pre code.language-mermaid").forEach(function (block, index) {
    var source = block.textContent;
    var container = document.createElement("div");
    container.className = "mermaid";
    container.id = "mermaid-diagram-" + index;
    container.textContent = source;
    block.parentElement.replaceWith(container);
  });

  mermaid.run();
});
