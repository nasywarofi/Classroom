function addComment(inputId, sectionId) {
    const input = document.getElementById(inputId);
    const section = document.getElementById(sectionId);
    const text = input.value.trim();
    if (text !== '') {
      const p = document.createElement('p');
      p.textContent = text;
      section.appendChild(p);
      input.value = '';
    }
  }
  