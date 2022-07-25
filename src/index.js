const handleAccordion1 = () => {
  const accordion = document.getElementById("accordion1");
  const accordionItem = document.getElementById("accordion1-items");
  const accordionItemHeading = document.getElementById("accordion1-header");
  let classList = accordionItem.classList;
  let findHidden = classList.contains("hidden");
  if (findHidden) {
    accordionItem.classList.remove("hidden");
    let icon = accordion.getElementsByClassName("icon")[0];
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
  } else {
    accordionItem.classList.add("hidden");
    let icon = accordion.getElementsByClassName("icon")[0];
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
  }
};
const handleAccordion2 = () => {
  const accordion = document.getElementById("accordion2");
  const accordionItem = document.getElementById("accordion2-items");
  const accordionItemHeading = document.getElementById("accordion2-header");
  let classList = accordionItem.classList;
  let findHidden = classList.contains("hidden");
  if (findHidden) {
    accordionItem.classList.remove("hidden");
    let icon = accordion.getElementsByClassName("icon")[0];
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
  } else {
    accordionItem.classList.add("hidden");
    let icon = accordion.getElementsByClassName("icon")[0];
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
  }
};
const handleAccordion3 = () => {
  const accordion = document.getElementById("accordion3");
  const accordionItem = document.getElementById("accordion3-items");
  const accordionItemHeading = document.getElementById("accordion3-header");
  let classList = accordionItem.classList;
  let findHidden = classList.contains("hidden");
  if (findHidden) {
    accordionItem.classList.remove("hidden");
    let icon = accordion.getElementsByClassName("icon")[0];
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
  } else {
    accordionItem.classList.add("hidden");
    let icon = accordion.getElementsByClassName("icon")[0];
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
  }
};
