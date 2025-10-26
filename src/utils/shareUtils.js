export async function copyCurrentUrlToClipboard() {
  const url = window.location.href;
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch (error) {
    console.log("Failed to copy url: ", error);
    return false;
  }
}

export function shareViaEmail(componentName) {
  const url = window.location.href;
  const subject = `Check out: ${componentName}`;
  const body = `I thought you might be interested in this learning material:\n\n${url}`;
  const mailtoLink = `mailto:?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}
