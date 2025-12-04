document.getElementById("shareBtn").addEventListener("click", async () => {
  const data = {
    title: "Abdo Elamir",
    text: "Check this digital business card",
    url: window.location.href
  };
  if (navigator.share) {
    navigator.share(data);
  } else {
    alert("Sharing not supported on this device.");
  }
});
document.getElementById("saveBtn").addEventListener("click", () => {
  const vcfData =
`BEGIN:VCARD
VERSION:3.0
FN:ABDO ELAMIR
TEL:01222447327
EMAIL:info@abdeoelamir.com
END:VCARD`;
  const blob = new Blob([vcfData], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "contact.vcf";
  a.click();
  URL.revokeObjectURL(url);
});