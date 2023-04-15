function boldCharacters(word) {
  const charactersToBold = Math.ceil(word.length * 0.3);
  return `<span class="adhd-bold">${word.slice(
    0,
    charactersToBold
  )}</span>${word.slice(charactersToBold)}`;
}

function processText(textNode) {
  const words = textNode.textContent.split(/\s+/);
  const modifiedWords = words.map((word) => boldCharacters(word)).join(" ");

  const wrapper = document.createElement("span");
  wrapper.innerHTML = modifiedWords;
  textNode.replaceWith(wrapper);
}

function traverseNodes(node) {
  if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
    processText(node);
  } else {
    node.childNodes.forEach((child) => traverseNodes(child));
  }
}

traverseNodes(document.body);
